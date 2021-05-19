from pydantic import BaseModel,Field,EmailStr
from pyobjectId import PyObjectId
from bson import ObjectId
from datetime import date

class Post(BaseModel):
    id:PyObjectId = Field(default_factory=PyObjectId,alias="_id" )
    title:str = Field(...)
    description:str = Field(...)
    text:str = Field(...)
    post_date:date = Field(...)
    section:str = Field(...)
    author:PyObjectId = Field(default_factory=PyObjectId)
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "title": "JS intro",
                "description": "JS intro in ES6 module for beginners",
                "text": "mnogo texta",
                "post_date": "2021-03-05",
                "section":"JS",
                "author": "60a16289ea5b82b20ec7b7da"
            }
        }

class User(BaseModel):
    id:PyObjectId = Field(default_factory=PyObjectId,alias='_id')
    login:str = Field(...)
    password:str = Field(...)
    nickname:str = Field(...)
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "login": "jdoe@example.com",
                "password": "ddkvjdaf",
                "nickname": "aaartuuuup",
            }
        }

class Section(BaseModel):
    id:PyObjectId = Field(default_factory=PyObjectId,alias="_id" )
    section_name:str = Field(...)
    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "section_name": "JS"            
            }
        }
