from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.database import Base
#from app.models.user_model import User

class UserProfile(Base):
    __tablename__ = "user_profiles"
    id = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, ForeignKey("users.id"), unique=True, index=True)
    fname = Column(String, index=True)
    lname = Column(String, index=True)
    address1 = Column(String)
    address2 = Column(String, nullable=True)
    city = Column(String)
    state = Column(String)
    zipcode = Column(String)

    #user = relationship("User", back_populates="users")
