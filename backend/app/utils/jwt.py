from jose import jwt
from datetime import datetime, timedelta
import os

SECRET_KEY = os.getenv("JWT_SECRET_KEY")

ALGORITHM = "HS256"


def create_access_token(data: dict):

    payload = data.copy()

    payload.update({

        "exp": datetime.utcnow() + timedelta(days=7)

    })

    return jwt.encode(

        payload,

        SECRET_KEY,

        algorithm=ALGORITHM

    )