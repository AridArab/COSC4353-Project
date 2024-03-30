from typing import Union
from pydantic import BaseModel
from typing import Optional
import datetime




class UserQuotesBase(BaseModel):
    gallons: int
    date: datetime.date
class UserQuotesCreate(UserQuotesBase):
    pass


class UserQuotes(UserQuotesBase):
    userid: int
    address: str
    suggestedprice: float
    total: float
    
    class Config:
        from_attributes = True