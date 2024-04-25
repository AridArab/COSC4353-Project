from sqlalchemy import Boolean, Column, ForeignKey, Integer, Double, String, Date
from sqlalchemy.orm import relationship

from app.database import Base



class UserQuotes(Base):
    __tablename__ = "user_quotes"
    id = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, ForeignKey("users.id"), index=True)
    gallons = Column(Integer)
    address = Column(String)
    state = Column(String)
    date = Column(Date)
    suggestedprice = Column(Double)
    total = Column(Double)