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

### 4. Python api

#### Setting up a venv:
 ```bash
  py -3 -m venv .venv
  .venv\scripts\activate
 ```
#### Install fastapi and uvicorn
 ```bash
  py -3 -m pip install fastapi uvicorn
 ```
#### Start python API:
 ```bash
  py -3 -m uvicorn main:app
 ```


