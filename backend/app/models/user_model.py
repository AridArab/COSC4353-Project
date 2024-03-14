from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.database import Base
#from app.models.user_profile_model import UserProfile

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(Integer, unique=True)
    hashed_password = Column(String)
    is_enabled = Column(Boolean, default=True)

    #profile = relationship("UserProfile", back_populates="user_profiles")
