import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base
from app.crud.user_profile_crud import create_profile, get_profile_by_user_id
from app.models.user_model import User
from app.models.user_profile_model import UserProfile
from app.schemas.user_profile_schema import UserProfileCreate

SQLALCHEMY_TEST_DATABASE_URL = "sqlite:///./test_user_profile_crud.db"
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
def test_user(db_session):
    user = User(username="testuser", hashed_password="testpass")
    db_session.add(user)
    db_session.commit()
    return user

def test_create_and_get_profile(db_session, test_user):
    profile_data = UserProfileCreate(
        fname="John",
        lname="Doe",
        address1="123 Main St",
        address2=None,
        city="Testville",
        state="TestState",
        zipcode="12345"
    )
    # Create profile
    created_profile = create_profile(userid=test_user.id, profile=profile_data, db=db_session)
    assert created_profile.userid == test_user.id
    assert created_profile.fname == "John"

    # Retrieve profile
    retrieved_profile = get_profile_by_user_id(user_id=test_user.id, db=db_session)
    assert retrieved_profile is not None
    assert retrieved_profile.fname == profile_data.fname
