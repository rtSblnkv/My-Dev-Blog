# My-Dev-Blog
This is a new blog about programming called My Dev Blog. By Artur Fattakhov,Artem Sabelnikov and Mikhail Baskakov
1.Клонирование репозитория git clone
2.Подготовка клиентской части 
cd ..\client 
npm install
Запуск клиента:npm run start

3.Подготовка серверной части 
cd ..\Server 
npm install
npm install nodemon -D
Запуск сервера: nodemon server

4.Запуск python api
Настройка виртуального окружения:
py -3 -m venv .venv
.venv\scripts\activate
Устанавливаем fastapi:
py -3 -m pip install fastapi
Устанавливаем uvicorn:
py -3 -m pip install uvicorn
Запуск python API:
py -3 -m uvicorn main:app


