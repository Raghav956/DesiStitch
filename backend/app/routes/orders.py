from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.order import Order

from app.schemas.order import OrderCreate

router = APIRouter()


def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


@router.post("/")
def create_order(

    order: OrderCreate,

    db: Session = Depends(get_db)

):

    new_order = Order(

        customer_name=order.customer_name,

        phone=order.phone,

        address=order.address,

        city=order.city,

        state=order.state,

        pincode=order.pincode,

        payment_method=order.payment_method,

        total_amount=order.total_amount,

        items=order.items

    )

    db.add(new_order)

    db.commit()

    db.refresh(new_order)

    return new_order


@router.get("/")
def get_orders(

    db: Session = Depends(get_db)

):

    return db.query(Order).all()


@router.get("/{id}")
def get_order(

    id: int,

    db: Session = Depends(get_db)

):

    return db.query(Order).filter(
        Order.id == id
    ).first()