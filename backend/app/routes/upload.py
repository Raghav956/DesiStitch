import cloudinary
import cloudinary.uploader

from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

router = APIRouter()

@router.post("/")
async def upload_file(

    file: UploadFile = File(...)

):

    resource_type = "auto"

    result = cloudinary.uploader.upload(

        file.file,

        resource_type=resource_type

    )

    return {

        "url": result["secure_url"]

    }