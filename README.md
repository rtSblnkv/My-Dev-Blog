# My-Dev-Blog
This is a new blog about programming called My Dev Blog.
By Artur Fattakhov,Artem Sabelnikov and Mikhail Baskakov
***
### 1.Клонирование репозитория
```bash
   git clone https://github.com/algorithm-ssau/My-Dev-Blog.git
```
### 2.Подготовка клиентской части 
```bash
 cd ..\client 
 npm install
```
#### Запуск клиента: 
```bash
npm run start
```
### 3.Подготовка серверной части 
```bash
 cd ..\Server 
 npm install
 npm install nodemon -D
```
#### Запуск сервера:
```bash
 nodemon server
```

### 4.python api

#### Настройка виртуального окружения:
```bash
 py -3 -m venv .venv
 .venv\scripts\activate
```
#### Установка fastapi и uvicorn
```bash
 py -3 -m pip install fastapi uvicron
```
#### Запуск python API:
```bash
 py -3 -m uvicorn main:app
```


