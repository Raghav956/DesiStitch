from sqlalchemy import Column, Integer, String, Text

from app.database import Base

class Collection(Base):

    __tablename__ = "collections"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)

    slug = Column(String, unique=True)

    subtitle = Column(Text)

    banner = Column(String)