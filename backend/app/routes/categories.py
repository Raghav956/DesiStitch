from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.category import Category
from app.schemas.category import CategoryCreate
from app.models.product import Product
router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_category(category: CategoryCreate, db: Session = Depends(get_db)):

    new_category = Category(**category.dict())

    db.add(new_category)
    db.commit()
    db.refresh(new_category)

    return new_category


@router.get("/")
def get_categories(db: Session = Depends(get_db)):
    return db.query(Category).all()



@router.get("/{category_id}/products")
def get_category_products(
    category_id: int,
    db: Session = Depends(get_db)
):

    return db.query(Product).filter(
        Product.category_id == category_id
    ).all()