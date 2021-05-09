import os
import motor.motor_asyncio
from fastapi import FastAPI,HTTPException,status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from python_api.schemas import Post,User,Section

app = FastAPI()
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGO_URL"])
db = client.college
@app.post("/user_create",response_description="Add new User",response_model=User)
async def insert_user(user:User = Body(...)):
    user = jsonable_encoder(user)
    new_user = await db["blogs"].insert_one(user)
    #TODO update id to my format
    created_user = await db["blogs"].find_one({"_id":new_user.inserted_id})
    return JSONResponse(status_code =status.HTTP_201_CREATED,content=created_user)

@app.post("/section_create",response_description="Add new Section",response_model=Section)
async def insert_section(section:Section = Body(...)):
    section = jsonable_encoder(section)
    new_section = await db["blogs"].insert_one(section)
    #TODO update id to my format
    created_section = await db["blogs"].find_one({"_id":new_section.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED,content=created_section)

@app.post("/post_create",response_description="Add new Post",response_model=Post)
async def insert_post(post:Post = Body(...)):
    post = jsonable_encoder(post)
    new_post = await db["blogs"].insert_one(post)
    #TODO update id to my format
    created_post = await db["blogs"].find_one({"_id":new_post.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED,content=created_post)

@app.get('/developers')
async def get_dev():
    return [{
        "responseType":"Data",
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

