from typing import Union
from pydantic import BaseModel
from typing import Optional

class UserProfileBase(BaseModel):
    fname: str
    lname: str
    address1: str
    address2: Optional[str]
    city: str
    state: str
    zipcode: str

class UserProfileCreate(UserProfileBase):
    pass

class UserProfile(UserProfileBase):
    #id: int
    userid: int

    class Config:
        from_attributes = True
