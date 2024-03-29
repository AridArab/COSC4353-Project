from typing import Annotated
from fastapi import Depends, APIRouter, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine

import app.crud.user_quotes_crud as crud
import app.models.user_quotes_model as models
import app.schemas.user_quotes_schema as schemas
from app.schemas.user_schema import User
from app.auth import get_current_active_user


router = APIRouter()

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
    return crud.create_quote(current_user.id, quote, db)


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

