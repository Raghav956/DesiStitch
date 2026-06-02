from pydantic import BaseModel


class OrderCreate(BaseModel):
    user_id: int | None = None

    customer_name: str

    phone: str

    address: str

    city: str

    state: str

    pincode: str

    payment_method: str

    total_amount: float

    items: str