from smtplib import quotedata
from typing import Annotated
from fastapi import Depends, APIRouter, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine
import json

import app.crud.user_quotes_crud as crud
import app.models.user_quotes_model as models
import app.schemas.user_quotes_schema as schemas
from app.schemas.user_schema import User
from app.auth import get_current_active_user
import PricingModule

router = APIRouter()
pricing_module = PricingModule()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/user/me/quote/create", response_model=schemas.UserQuotesCreate)
async def create_quote(
    current_user: Annotated[User, Depends(get_current_active_user)],
    quote: schemas.UserQuotesCreate,
    db: Session = Depends(get_db)
):
    is_in_state = True
    has_history = False
    suggested_price_per_gallon, total_price = pricing_module.calculate_price(
        quotedata.gallons, 
        is_in_state, 
        has_history
    )
    # Create a new quote object to be saved in the database
    new_quote = models.UserQuotes(
        userid=current_user.id,
        address="User's address",  # Replace with actual address logic
        gallons=quotedata.gallons,
        date=quotedata.date,
        suggestedprice=suggested_price_per_gallon,
        total=total_price
    )
    created_quote = crud.create_quote(new_quote, db)
    return created_quote
    return crud.create_quote(current_user.id, quote, db)


@router.get("/user/me/quote", response_model=list[schemas.UserQuotes])
async def get_quotes(
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Session = Depends(get_db)
):
    db_quotes = crud.get_quotes_by_user_id(current_user.id, db)
    if not db_quotes:
        raise HTTPException(status_code=404, detail="Quote not found")
    return db_quotes


@router.get("/user/me/quote/{quote_id}", response_model=schemas.UserQuotes)
async def get_specific_quote(
    quote_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    db: Session = Depends(get_db)
):  
    db_quote = crud.get_quote(quote_id, db)
    if not db_quote:
        raise HTTPException(status_code=404, detail="Quote not found")
    return db_quote

