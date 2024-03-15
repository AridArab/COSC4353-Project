# TODO: figure out if we need two update functions (one for password, and one for disable/enable)

from sqlalchemy.orm import Session
import app.models.user_model as models
import app.schemas.user_schema as schemas

from argon2 import PasswordHasher
ph = PasswordHasher()

# Create
def create_user(user: schemas.UserCreate, db: Session):
    hashed_password = ph.hash(user.password)
    db_user = models.User(username = user.username, hashed_password = hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return user

# Read
def get_user(user_id: int, db: Session):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    return user

def get_user_by_username(username: str, db: Session):
    user = db.query(models.User).filter(models.User.username == username).first()
    return user

# Update
def update_user(user_id: int, updated_user: schemas.UserUpdate, db: Session):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    
    for field, value in updated_user.dict().items():
        setattr(user, field, value)

    db.commit()
    db.refresh(user)
    return user

def update_user_password(user_id: int, updated_user: schemas.UserUpdatePassword, db: Session):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    
    hashed_password = ph.hash(updated_user.password)
    setattr(user, "hashed_password", hashed_password)

    db.commit()
    db.refresh(user)
    return user

# Delete
#def delete_user(user_id: int, db: Session):
#    user = db.query(User).filter(User.id == user_id).first()
#    db.delete(user)
#    db.commit()
