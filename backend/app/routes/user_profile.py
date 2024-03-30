from typing import Annotated
from fastapi import Depends, APIRouter, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine

import app.crud.user_profile_crud as crud
import app.models.user_profile_model as models
import app.schemas.user_profile_schema as schemas
from app.schemas.user_schema import User
from app.auth import get_current_active_user, authenticate_user, create_access_token, Token, ACCESS_TOKEN_EXPIRE_MINUTES

router = APIRouter()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CRUD operations
'''
# Create
@router.post("/user/{user_id}/profile/create", response_model=schemas.UserProfile)
def create_profile(user_id: int, profile: schemas.UserProfileCreate, db: Session = Depends(get_db)):
    db_user_profile = crud.get_profile_by_user_id(user_id, db)
    # TODO: redirect to edit page
    if db_user_profile:
        raise HTTPException(status_code=400, detail="Profile already exists")
    return crud.create_profile(user_id, profile, db)

# Read
@router.get("/user/{user_id}/profile", response_model=schemas.UserProfile)
def get_profile_by_user_id(user_id: int, db: Session = Depends(get_db)):
    db_user_profile = crud.get_profile_by_user_id(user_id, db)
    if not db_user_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return db_user_profile

# Update
@router.put("/user/{user_id}/profile/edit", response_model=schemas.UserProfile)
def update_profile(user_id: int, updated_profile: schemas.UserProfileBase, db: Session = Depends(get_db)):
    db_user_profile = crud.get_profile_by_user_id(user_id, db)
    if not db_user_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return crud.update_profile(user_id, updated_profile, db)

# TODO: do we need a response_model here?
# Delete
#@router.delete("/user/{user_id}/profile/delete", response_model=schemas.UserProfile)
#def delete_profile(profile_id: int, db: Session = Depends(get_db)):
#    pass
'''

@router.post("/user/me/profile/create", response_model=schemas.UserProfile)
async def create_profile_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
    profile: schemas.UserProfileCreate,
    db: Session = Depends(get_db)
):
    db_user_profile = crud.get_profile_by_user_id(current_user.id, db)
    # TODO: redirect to edit page
    if db_user_profile:
        raise HTTPException(status_code=400, detail="Profile already exists")
    return crud.create_profile(current_user.id, profile, db)

@router.get("/user/me/profile", response_model=schemas.UserProfile)
async def get_profile_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Session = Depends(get_db)
):
    db_user_profile = crud.get_profile_by_user_id(current_user.id, db)
    if not db_user_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return db_user_profile

@router.put("/user/me/profile/edit", response_model=schemas.UserProfile)
async def update_profile_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
    updated_profile: schemas.UserProfileBase,
    db: Session = Depends(get_db)
):
    db_user_profile = crud.get_profile_by_user_id(current_user.id, db)
    if not db_user_profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return crud.update_profile(current_user.id, updated_profile, db)
