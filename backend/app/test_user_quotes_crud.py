import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base
from app.models.user_model import User
from app.models.user_profile_model import UserProfile
from app.models.user_quotes_model import UserQuotes
from app.crud.user_quotes_crud import create_quote, get_quote
from app.schemas.user_quotes_schema import UserQuotesCreate

SQLALCHEMY_TEST_DATABASE_URL = "sqlite:///./test_user_quotes_crud.db"
engine = create_engine(SQLALCHEMY_TEST_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="function")
def db_session():
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()
        Base.metadata.drop_all(bind=engine)

@pytest.fixture(scope="function")
def test_user_and_profile(db_session):
    user = User(username="testuser", hashed_password="testpass")
    db_session.add(user)
    db_session.flush()  # Flush to assign an ID without committing
    profile = UserProfile(
        userid=user.id,
        fname="John",
        lname="Doe",
        address1="123 Main St",
        city="Testville",
        state="TestState",
        zipcode="12345"
    )
    db_session.add(profile)
    db_session.commit()
    return user, profile

def test_create_and_get_quote(db_session, test_user_and_profile):
    user, profile = test_user_and_profile
    quote_data = UserQuotesCreate(
        gallons=100,
        date="2023-01-01",
        total=200  # Assuming total is calculated and saved at creation
    )
    # Create quote
    created_quote = create_quote(userid=user.id, quote=quote_data, db=db_session)
    assert created_quote.userid == user.id
    assert created_quote.gallons == 100

    # Retrieve quote
    retrieved_quote = get_quote(quote_id=created_quote.id, db=db_session)
    assert retrieved_quote is not None
    assert retrieved_quote.gallons == quote_data.gallons
