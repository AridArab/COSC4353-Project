from datetime import timedelta
from typing import Annotated
from fastapi import Depends, APIRouter, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine
from app.auth import get_current_active_user, authenticate_user, create_access_token, Token, ACCESS_TOKEN_EXPIRE_MINUTES

import app.crud.user_crud as crud
import app.models.user_model as models
import app.schemas.user_schema as schemas

router = APIRouter()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CRUD operations
# Create
@router.post("/user/", response_model=schemas.UserCreate)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(user.username, db)
    # TODO: redirect to edit page
    if db_user:
        raise HTTPException(status_code=400, detail="User already exists")
    return crud.create_user(user, db)

'''
# Read
@router.get("/user/{user_id}", response_model=schemas.User)
def get_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(user_id, db)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

# Update
@router.put("/user/{user_id}/edit", response_model=schemas.UserUpdate)
def update_user(user_id: int, updated_user: schemas.UserUpdate, db: Session = Depends(get_db)):
    db_user = crud.get_user(user_id, db)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.update_user(user_id, updated_user, db)

@router.put("/user/{user_id}/resetpassword", response_model=schemas.User)
def update_user_password(user_id: int, updated_user: schemas.UserUpdatePassword, db: Session = Depends(get_db)):
    db_user = crud.get_user(user_id, db)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.update_user_password(user_id, updated_user, db)

# TODO: do we need a response_model here?
# Delete
#@app.delete("/user/{user_id}", response_model=schemas.User)
#def delete_user(user_id: int, db: Session = Depends(get_db)):
#    pass
'''

# TODO: move this to auth library
@router.post("/login")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: Session = Depends(get_db)
) -> Token:
    user = authenticate_user(form_data.username, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")

@router.get("/user/me/", response_model=schemas.User)
async def read_user_me(
    current_user: Annotated[schemas.User, Depends(get_current_active_user)]
):
    return current_user

@router.put("/user/me/resetpassword", response_model=schemas.User)
async def update_user_password_me(
    current_user: Annotated[schemas.User, Depends(get_current_active_user)],
    updated_user: schemas.UserUpdatePassword,
    db: Session = Depends(get_db)
):
    db_user = crud.get_user(current_user.id, db)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.update_user_password(current_user.id, updated_user, db)

