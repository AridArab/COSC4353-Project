from sqlalchemy.orm import Session
import app.models.user_profile_model as models
import app.schemas.user_profile_schema as schemas

# TODO: figure out how to make this more consistent (somehow use UserProfileCreate)
# Create
def create_profile(userid: int, profile: schemas.UserProfileCreate, db: Session):
    db_profile = models.UserProfile(
        userid = userid, 
        fname = profile.fname,
        lname = profile.lname,
        address1 = profile.address1,
        address2 = profile.address2,
        city = profile.city,
        state = profile.state,
        zipcode = profile.zipcode
    )
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

# Read
def get_profile(profile_id: int, db: Session):
    profile = db.query(models.UserProfile).filter(models.UserProfile.id == profile_id).first()
    return profile

def get_profile_by_user_id(user_id: int, db: Session):
    profile = db.query(models.UserProfile).filter(models.UserProfile.userid == user_id).first()
    return profile

# TODO: figure out whether we need an UpdateUserProfile schema
# Update
def update_profile(user_id: int, updated_profile: schemas.UserProfile, db: Session):
    profile = db.query(models.UserProfile).filter(models.UserProfile.userid == user_id).first()
    for field, value in updated_profile.dict().items():
        setattr(profile, field, value)

    db.commit()
    db.refresh(profile)
    return profile

# Delete
#def delete_profile(profile_id: int, db: Session):
#    profile = db.query(models.UserProfile).filter(models.UserProfile.id == profile_id).first()
#
#    db.delete(profile)
#    db.commit()
