from fastapi import Depends, FastAPI

from app.routes import user, user_profile #, etc...
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(user.router, prefix = "/api")
app.include_router(user_profile.router, prefix = "/api")

