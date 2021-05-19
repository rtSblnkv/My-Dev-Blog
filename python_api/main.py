import os
#from pymongo import MongoClient
from typing import List
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import FastAPI,Body,HTTPException,status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from schemas import Post,User,Section

app = FastAPI()
client = AsyncIOMotorClient("mongodb+srv://rTSblnkv:12hh45hh@cluster0.usmef.mongodb.net/blog?retryWrites=true&w=majority")
db = client.blog

@app.post("/user_create",response_description="Add new User",response_model=User)
async def insert_user(user:User):
    user = jsonable_encoder(user)
    new_user = await db["users"].insert_one(user)
    created_user = await db["users"].find_one({"_id":new_user.inserted_id})
    return JSONResponse(status_code =status.HTTP_201_CREATED,content=created_user)

@app.post("/section_create",response_description="Add new Section",response_model=Section)
async def insert_section(section:Section = Body(...)):
    section = jsonable_encoder(section)
    new_section = await db["sections"].insert_one(section)
    created_section = await db["sections"].find_one({"_id":new_section.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED,content=created_section)

@app.post("/post_create",response_description="Add new Post",response_model=Post)
async def insert_post(post:Post = Body(...)):
    post = jsonable_encoder(post)
    new_post = await db["posts"].insert_one(post)
    created_post = await db["posts"].find_one({"_id":new_post.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED,content=created_post)

@app.get("/users_get",response_description="Getting all users",response_model=List[User])
async def get_users():
    users = await db['users'].find().to_list(100)
    return users

@app.get("/posts_get",response_description="Getting all posts",response_model=List[Post])
async def get_posts():
    posts = await db['posts'].find().to_list(100)
    return posts


@app.get('/developers')
async def get_dev():
    return [{
        "Frontend":[
            "https://vk.com/b4sk4kov",
            "https://vk.com/aaaptyppp"
                   ],
        "Backend":"https://vk.com/rt_sblnkv",
        "UX/UI":   [
            "https://vk.com/b4sk4kov",
            "https://vk.com/aaaptyppp",
            "https://vk.com/rt_sblnkv"
                   ]
        }]

