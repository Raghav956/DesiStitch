from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.product import Product
from app.models.category import Category
from app.models.collection import Collection
from app.models.order import Order
from app.models.message import Message
from app.models.newsletter import NewsletterSubscriber

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


@router.get("/stats")
def get_dashboard_stats(

    db: Session = Depends(get_db)

):

    return {

        "products":
            db.query(Product).count(),

        "categories":
            db.query(Category).count(),

        "collections":
            db.query(Collection).count(),

        "orders":
            db.query(Order).count(),

        "messages":
            db.query(Message).count(),

        "subscribers":
            db.query(
                NewsletterSubscriber
            ).count()

    }