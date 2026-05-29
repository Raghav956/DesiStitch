from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.collection import Collection

from app.schemas.collection import CollectionCreate

from app.models.product import Product
router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


@router.post("/")
def create_collection(
    collection: CollectionCreate,
    db: Session = Depends(get_db)
):

    new_collection = Collection(
        **collection.dict()
    )

    db.add(new_collection)

    db.commit()

    db.refresh(new_collection)

    return new_collection


@router.get("/")
def get_collections(
    db: Session = Depends(get_db)
):

    return db.query(Collection).all()


@router.get("/{slug}")
def get_collection(
    slug: str,
    db: Session = Depends(get_db)
):

    return db.query(Collection).filter(
        Collection.slug == slug
    ).first()

@router.get("/{slug}/products")
def get_collection_products(
    slug: str,
    db: Session = Depends(get_db)
):

    collection = db.query(Collection).filter(
        Collection.slug == slug
    ).first()

    if not collection:

        return []

    return db.query(Product).filter(
        Product.collection_id == collection.id
    ).all()