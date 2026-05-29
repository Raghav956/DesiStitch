from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Numeric,
    ForeignKey
)

from app.database import Base

class Product(Base):

    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)

    description = Column(Text)

    price = Column(Numeric)

    image_url = Column(String)

    stock = Column(Integer)

    category_id = Column(
        Integer,
        ForeignKey("categories.id")
    )

    collection_id = Column(
        Integer,
        ForeignKey("collections.id")
    )