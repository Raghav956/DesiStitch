from pydantic import BaseModel

class ProductCreate(BaseModel):
    title: str
    description: str
    price: float
    image_url: str
    stock: int
    category_id: int
    collection_id: int