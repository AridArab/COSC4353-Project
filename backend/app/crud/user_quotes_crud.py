from sqlalchemy.orm import Session
from app.models.user_profile_model import UserProfile
import app.models.user_quotes_model as models
import app.schemas.user_quotes_schema as schemas
import app.PricingModule as pricing
import datetime


def create_quote(userid: int, quote: schemas.UserQuotesCreate, db: Session):
    profile = db.query(UserProfile).filter(UserProfile.userid == userid).first()    
    loc_factor = 0.02
    db_quote = models.UserQuotes(
        userid = userid,
        gallons = quote.gallons,
        date = quote.date,
        city = profile.city,
        address = profile.address1,
        suggestedprice = 0,
        total = 0
    )
    db.add(db_quote)
    db.commit()
    db.refresh(db_quote)
    return db_quote

def get_quote(quote_id: int, db: Session):
    quote = db.query(models.UserQuotes).filter(models.UserQuotes.id == quote_id).first()
    return quote

def get_quotes_by_user_id(user_id: int, db: Session):
    quotes = db.query(models.UserQuotes).filter(models.UserQuotes.userid == user_id).all()
    return quotes

