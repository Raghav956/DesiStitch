from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

from app.models.user import User
from app.models.product import Product
from app.models.category import Category

from app.routes import auth
from app.routes import products
from app.routes import categories
from app.models.collection import Collection
from app.routes import collections
from app.routes import orders
import app.cloudinary_config
from app.routes import upload
from app.models.admin import Admin
from app.routes import admin_auth
from app.models.message import Message
from app.routes import messages
from app.routes import newsletter
from app.routes import dashboard
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
    admin_auth.router,
    prefix="/admin",
    tags=["Admin Auth"]
)
app.include_router(

    messages.router,

    prefix="/messages",

    tags=["Messages"]

)

app.include_router(
    categories.router,
    prefix="/categories",
    tags=["Categories"]
)
app.include_router(
    upload.router,
    prefix="/upload",
    tags=["Upload"]
)
app.include_router(
    collections.router,
    prefix="/collections",
    tags=["Collections"]
)
app.include_router(

    newsletter.router,

    prefix="/newsletter",

    tags=["Newsletter"]

)
app.include_router(
    orders.router,
    prefix="/orders",
    tags=["Orders"]
)
app.include_router(

    dashboard.router,

    prefix="/dashboard",

    tags=["Dashboard"]

)

@app.get("/")
def home():

    return {
        "message": "Desi Stitch Backend Running"
    }