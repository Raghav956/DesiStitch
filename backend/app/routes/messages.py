from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.message import Message
from app.schemas.message import MessageCreate

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/")
def create_message(

    payload: MessageCreate,

    db: Session = Depends(get_db)

):

    message = Message(

        name=payload.name,

        email=payload.email,

        phone=payload.phone,

        message=payload.message

    )

    db.add(message)

    db.commit()

    db.refresh(message)

    return message


@router.get("/")
def get_messages(

    db: Session = Depends(get_db)

):

    return db.query(Message)\
        .order_by(
            Message.created_at.desc()
        )\
        .all()