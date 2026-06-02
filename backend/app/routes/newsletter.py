from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.newsletter import NewsletterSubscriber

from app.schemas.newsletter import NewsletterCreate

from app.services.email_service import (
    send_newsletter_welcome_email
)

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


@router.post("/")
def subscribe(

    data: NewsletterCreate,

    db: Session = Depends(get_db)

):

    existing = db.query(

        NewsletterSubscriber

    ).filter(

        NewsletterSubscriber.email == data.email

    ).first()

    if existing:

        raise HTTPException(

            status_code=400,

            detail="Already subscribed"

        )

    subscriber = NewsletterSubscriber(

        email=data.email

    )

    db.add(subscriber)

    db.commit()

    db.refresh(subscriber)

    send_newsletter_welcome_email(
        data.email
    )

    return {

        "message": "Subscribed successfully"

    }


@router.get("/")
def get_subscribers(

    db: Session = Depends(get_db)

):

    return db.query(

        NewsletterSubscriber

    ).order_by(

        NewsletterSubscriber.created_at.desc()

    ).all()