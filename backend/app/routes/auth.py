from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.user import User
from app.schemas.user import UserSignup, UserLogin
from passlib.context import CryptContext
from app.utils.jwt import create_access_token
router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/signup")
def signup(user: UserSignup, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    hashed_password = pwd_context.hash(user.password)

    new_user = User(
        name=user.name,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User created successfully"
    }


@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    existing_user = db.query(User).filter(User.email == user.email).first()

    if not existing_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    valid = pwd_context.verify(user.password, existing_user.password)

    if not valid:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    token = create_access_token({

    "user_id": existing_user.id,

    "email": existing_user.email

    })

    return {

    "access_token": token,

    "token_type": "bearer",

    "user": {

        "id": existing_user.id,

        "name": existing_user.name,

        "email": existing_user.email

    }

}