from pydantic import BaseModel
from pydantic import EmailStr
from pydantic import Field


class MessageCreate(BaseModel):

    name: str = Field(
        min_length=2
    )

    email: EmailStr

    phone: str = Field(
        min_length=10,
        max_length=10
    )

    message: str = Field(
        min_length=5
    )