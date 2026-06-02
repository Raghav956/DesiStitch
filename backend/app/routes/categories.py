from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.category import Category
from app.schemas.category import CategoryCreate
from app.models.product import Product
from fastapi import HTTPException
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
    
    
@router.get("/{id}")
def get_category(
    id: int,
    db: Session = Depends(get_db)
):

    category = db.query(Category).filter(
        Category.id == id
    ).first()

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    return category


@router.delete("/{id}")
def delete_category(
    id: int,
    db: Session = Depends(get_db)
):

    category = db.query(Category).filter(
        Category.id == id
    ).first()

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    db.delete(category)

    db.commit()

    return {
        "message": "Deleted"
    }


@router.put("/{id}")
def update_category(

    id: int,

    category: CategoryCreate,

    db: Session = Depends(get_db)

):

    existing = db.query(Category).filter(
        Category.id == id
    ).first()

    if not existing:

        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    existing.name = category.name
    existing.image_url = category.image_url

    db.commit()

    db.refresh(existing)

    return existing