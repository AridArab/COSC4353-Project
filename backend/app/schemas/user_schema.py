from typing import Union
from pydantic import BaseModel

class UserBase(BaseModel):
    username: str

class UserCreate(BaseModel):
    password: str

class UserUpdatePassword(UserCreate):
    pass

class UserUpdate(UserBase):
    is_enabled: bool

class User(UserBase):
    # id: int 
    # is_enabled: bool

    class Config:
        from_attributes = True
