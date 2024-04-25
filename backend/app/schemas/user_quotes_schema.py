from typing import Union
from pydantic import BaseModel
from typing import Optional
import datetime




class UserQuotesBase(BaseModel):
    gallons: int
    date: datetime.date
    address: str
    state: str
    
class UserQuotesCreate(UserQuotesBase):
    pass


class UserQuotes(UserQuotesBase):
    id: int
    userid: int
    suggestedprice: float
    total: float
    
    class Config:
        from_attributes = True
