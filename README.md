# My-Dev-Blog
## About the project
This is a new blog about programming called My Dev Blog.
By Artur Fattakhov,Artem Sabelnikov and Mikhail Baskakov
***
## Installation
### 1.Clone repository
 ```bash
   git clone https://github.com/algorithm-ssau/My-Dev-Blog.git
 ```
### 2.Client part
 ```bash
  cd ..\client 
  npm install
 ```
#### Client launch: 
 ```bash
  npm run start
 ```
### 3.Server part
 ```bash
  cd ..\Server 
  npm install
  npm install nodemon -D
 ```
#### Server launch:
```bash
 nodemon server
```

### 4. Python API
Python API is used for database populating by sending POST-requests.
```bash
 cd ...\python_api
```
#### Setting up a venv:
 ```bash
  py -3 -m venv .venv
  .venv\scripts\activate
 ```
#### Install fastapi,uvicorn,pydantic,bson,motor
 ```bash
  pip install uvicorn fastapi motor pydantic bson
 ```
#### Start python API:
 ```bash
  uvicorn main:app
 ```
 Change your url to .../docs and start OpenAPI.
 Create request and execute.


