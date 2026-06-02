from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Numeric
from sqlalchemy import Text
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from datetime import datetime
from app.database import Base


class Order(Base):

    __tablename__ = "orders"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    customer_name = Column(String)

    phone = Column(String)

    address = Column(Text)

    city = Column(String)

    state = Column(String)

    pincode = Column(String)

    payment_method = Column(String)

    status = Column(
        String,
        default="Pending"
    )
    created_at = Column(
    DateTime,
    default=datetime.utcnow
)

    total_amount = Column(Numeric)

    items = Column(Text)
    user_id = Column(
    Integer,
    ForeignKey("users.id"),
    nullable=True
)