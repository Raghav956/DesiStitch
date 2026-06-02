from pydantic import BaseModel
from pydantic import EmailStr


class NewsletterCreate(BaseModel):

    email: EmailStr