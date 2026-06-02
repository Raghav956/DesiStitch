from pydantic import BaseModel, Field

class CategoryCreate(BaseModel):

    name: str = Field(
        min_length=1
    )

    image_url: str = Field(
        min_length=1
    )