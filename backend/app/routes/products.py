from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.product import Product
from app.schemas.product import ProductCreate
from fastapi import HTTPException
router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.post("/")
def create_product(
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    new_product = Product(**product.dict())

    db.add(new_product)

    db.commit()

    db.refresh(new_product)

    return new_product


@router.get("/")
def get_products(
    db: Session = Depends(get_db)
):

    return db.query(Product).all()

@router.delete("/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db)
):

    product = db.query(Product).filter(
        Product.id == product_id
    ).first()

    if not product:
        return {
            "message": "Product not found"
        }

    db.delete(product)

    db.commit()

    return {
        "message": "Product deleted"
    }

@router.get("/{product_id}")
def get_product(
    product_id: int,
    db: Session = Depends(get_db)
):

    product = db.query(Product).filter(
        Product.id == product_id
    ).first()

    return product



@router.delete("/{id}")
def delete_product(
    id: int,
    db: Session = Depends(get_db)
):

    product = db.query(Product).filter(
        Product.id == id
    ).first()

    if not product:

        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    db.delete(product)

    db.commit()

    return {
        "message": "Product deleted"
    }



@router.put("/{id}")
def update_product(
    id: int,
    product: ProductCreate,
    db: Session = Depends(get_db)
):

    existing = db.query(Product).filter(
        Product.id == id
    ).first()

    if not existing:

        raise HTTPException(
            status_code=404,
            detail="Not Found"
        )

    existing.title = product.title
    existing.description = product.description
    existing.price = product.price
    existing.image_url = product.image_url
    existing.stock = product.stock
    existing.category_id = product.category_id
    existing.collection_id = product.collection_id

    db.commit()

    db.refresh(existing)

    return existing