import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database import Base
from app.crud.user_crud import create_user
from app.schemas.user_schema import UserCreate
from app.models.user_model import User

# Configure a test database (adjust the connection string for your environment)
SQLALCHEMY_TEST_DATABASE_URL = "sqlite:///./test_db.db"
engine = create_engine(SQLALCHEMY_TEST_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@pytest.fixture(scope="module")
def db_session():
    # Create the tables
    Base.metadata.create_all(bind=engine)
    db = TestingSessionLocal()
    yield db
    # Tear down the tables
    db.rollback()
    Base.metadata.drop_all(bind=engine)

def test_create_user(db_session):
    # Given
    user_data = UserCreate(username="testuser", password="testpassword")
    # When
    created_user = create_user(user_data, db_session)
    # Then
    assert db_session.query(User).filter(User.username == "testuser").first() is not None