from sqlalchemy.orm import Session
from app.models.user_profile_model import UserProfile
import app.models.user_quotes_model as models
import app.schemas.user_quotes_schema as schemas
import app.PricingModule as pricing
import datetime

def get_quote(quote_id: int, db: Session):
    quote = db.query(models.UserQuotes).filter(models.UserQuotes.id == quote_id).first()
    print(quote)
    return quote

def get_quotes_by_user_id(user_id: int, db: Session):
    quotes = db.query(models.UserQuotes).filter(models.UserQuotes.userid == user_id).all()
    print(quotes)
    return quotes

