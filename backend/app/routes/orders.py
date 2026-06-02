from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.order import Order

from app.schemas.order import OrderCreate
from fastapi import HTTPException

from app.models.product import Product
import json
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

    items = json.loads(
        order.items
    )

    # Validate stock

    for item in items:

        product = db.query(Product).filter(

            Product.id == item["id"]

        ).first()

        if not product:

            raise HTTPException(

                status_code=404,

                detail=f"Product {item['id']} not found"

            )

        if item["quantity"] > product.stock:

            raise HTTPException(

                status_code=400,

                detail=(
                    f"{product.title} only has "
                    f"{product.stock} pieces available"
                )

            )

    # Deduct stock

    for item in items:

        product = db.query(Product).filter(

            Product.id == item["id"]

        ).first()

        product.stock -= item["quantity"]

    new_order = Order(

         user_id=order.user_id,

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


@router.put("/{id}/status")
def update_order_status(

    id: int,

    status: str,

    db: Session = Depends(get_db)

):

    order = db.query(Order).filter(
        Order.id == id
    ).first()

    if not order:

        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    order.status = status

    db.commit()

    db.refresh(order)

    return order




@router.get("/user/{user_id}")
def get_user_orders(
    user_id: int,
    db: Session = Depends(get_db)
):
    return db.query(Order)\
        .filter(
            Order.user_id == user_id
        )\
        .order_by(
            Order.created_at.desc()
        )\
        .all()