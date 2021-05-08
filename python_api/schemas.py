from pydantic import BaseModel,Field,EmailStr
from python_api.pyobjectId import PyObjectId
from bson import ObjectId
from datetime import date

class Post(BaseModel):
    id:PyObjectId = Field(default_factory=PyObjectId,alias="_id" )
    title:str = Field(...)
    description:str = Field(...)
    text:str = Field(...)
    post_date:date = Field(...)
    section:PyObjectId = Field(default_factory=PyObjectId)
    author:PyObjectId = Field(default_factory=PyObjectId)
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "id":"1",
                "title": "JS intro",
                "description": "JS intro in ES6 module for beginners",
                "text": "mnogo texta",
                "post_date": "2021-03-05",
                "section":"JS",
                "author":"1"
            }
        }

class User(BaseModel):
    id:PyObjectId = Field(default_factory=PyObjectId,alias="_id" )
    login:Emailstr = Field(...)
    password:str = Field(...)
    nickname:str = Field(...)
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "id": "1",
                "login": "jdoe@example.com",
                "password": "ddkvjdaf",
                "nickname": "aaartuuuup",
            }
        }

class Section(BaseModel):
    id:PyObjectId = Field(default_factory=PyObjectId,alias="_id" )
    section_name:str
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "id":"JS",
                "section_name": "JS"            
            }
        }
