from typing import Union
from pydantic import BaseModel
from typing import Optional
import datetime




class UserQuotesBase(BaseModel):
    gallons: int
    date: datetime.date
    