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


@router.delete("/{id}")
def delete_collection(
    id: int,
    db: Session = Depends(get_db)
):

    collection = db.query(
        Collection
    ).filter(
        Collection.id == id
    ).first()

    if not collection:

        raise HTTPException(
            status_code=404,
            detail="Not Found"
        )

    db.delete(collection)

    db.commit()

    return {
        "message": "Deleted"
    }

@router.put("/{id}")
def update_collection(

    id: int,

    collection: CollectionCreate,

    db: Session = Depends(get_db)

):

    existing = db.query(Collection).filter(
        Collection.id == id
    ).first()

    if not existing:

        raise HTTPException(
            status_code=404,
            detail="Collection not found"
        )

    existing.title = collection.title
    existing.slug = collection.slug
    existing.subtitle = collection.subtitle
    existing.banner = collection.banner

    db.commit()
    db.refresh(existing)

    return existing