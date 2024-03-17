from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import user, user_profile #, etc...
from app.database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

# TODO: opt for more restrictive settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router, prefix = "/api")
app.include_router(user_profile.router, prefix = "/api")

