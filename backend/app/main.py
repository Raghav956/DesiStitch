from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.models.user import User
from app.models.product import Product
from app.models.category import Category

from app.routes import auth
from app.routes import products
from app.routes import categories

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["Auth"])

app.include_router(
    products.router,
    prefix="/products",
    tags=["Products"]
)

app.include_router(
    categories.router,
    prefix="/categories",
    tags=["Categories"]
)

@app.get("/")
def home():

    return {
        "message": "Desi Stitch Backend Running"
    }