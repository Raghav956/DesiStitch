from datetime import datetime
from datetime import timedelta

from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from jose import jwt

from sqlalchemy.orm import Session

import bcrypt

from app.database import SessionLocal

from app.models.admin import Admin

from pydantic import BaseModel

import os

from dotenv import load_dotenv

load_dotenv()

router = APIRouter()

SECRET_KEY = os.getenv(
    "JWT_SECRET_KEY"
)

ALGORITHM = "HS256"


class AdminLogin(BaseModel):

    email: str

    password: str


def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


@router.post("/login")
def login(

    data: AdminLogin,

    db: Session = Depends(get_db)

):

    admin = db.query(Admin).filter(

        Admin.email == data.email

    ).first()

    if not admin:

        raise HTTPException(

            status_code=401,

            detail="Invalid credentials"

        )

    valid = bcrypt.checkpw(

        data.password.encode(),

        admin.password_hash.encode()

    )

    if not valid:

        raise HTTPException(

            status_code=401,

            detail="Invalid credentials"

        )

    token = jwt.encode(

        {

            "sub": admin.email,

            "exp":
                datetime.utcnow()
                + timedelta(days=7)

        },

        SECRET_KEY,

        algorithm=ALGORITHM

    )

    return {

        "access_token": token

    }