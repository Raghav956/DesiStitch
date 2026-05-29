from pydantic import BaseModel

class CollectionCreate(BaseModel):

    title: str

    slug: str

    subtitle: str

    banner: str