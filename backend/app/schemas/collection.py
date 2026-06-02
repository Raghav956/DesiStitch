from pydantic import BaseModel, Field

class CollectionCreate(BaseModel):

    title: str = Field(
        min_length=1
    )

    slug: str = Field(
        min_length=1
    )

    subtitle: str = Field(
        min_length=1
    )

    banner: str = Field(
        min_length=1
    )