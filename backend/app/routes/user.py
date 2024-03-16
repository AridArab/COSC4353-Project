from fastapi import Depends, APIRouter, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine

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
@router.post("/user/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(user.username, db)
    # TODO: redirect to edit page
    if db_user:
        raise HTTPException(status_code=400, detail="User already exists")
    return crud.create_user(user, db)

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
