# My-Dev-Blog 💻
## О проекте 📖
Это новый сайт для изучения программирования под названием My-Dev-Blog.\
Над проектом работали 🧑‍🎓 :

 🖥️ [Артур Фаттахов](https://github.com/rtSblnkv)

 🖥️ [Артём Сабельников](https://github.com/mix4il)

 🖥️ [Михаил Баскаков](https://github.com/thundernorain)
 
### Сайт доступен по ссылке -> https://mydevblogg.netlify.app/
***
### Для локального запуска сайта вам нужно установить [Node.js](https://nodejs.org/en/download/). 🛣️

## Запуск проекта 💿
### 1.Клонируйте репозиторий 📂
 ```bash
   git clone https://github.com/algorithm-ssau/My-Dev-Blog.git
 ```
### 2.Клиентская часть 📤
 Из корневой папки проекта:
 ```bash
  cd ..\client 
  npm install
 ```
#### Запуск клиентской части: 
 ```bash
  npm run start
 ```
### 3.Серверная часть 🗳️
 Из корневой папки проекта:
 ```bash
  cd ..\Server 
  npm install
  npm install nodemon -D
 ```
#### Запуск сервера:
```bash
 npm run dev
```

### 4. Python API 🐍
API, созданное с помощью Python,Fastapi используется для наполнения базы данных сайта посредством POST-запросов. 
Также реализованы GET-запросы на получение всех пользователей и постов из базы, а также запрос, возвращающий информацию о разработчиках.

Для работы с API вам нужно установить [Python](https://www.python.org/downloads/) и [Pip](https://pip.pypa.io/en/stable/installing/).

Затем
```bash
 cd ...\python_api
```
#### Настройка виртуального окружения:
 ```bash
  py -3 -m venv .venv
  .venv\scripts\activate
 ```
#### Установите fastapi,uvicorn,pydantic,bson,motor
 ```bash
  pip install uvicorn fastapi motor pydantic bson
 ```
#### Запустите API:
 ```bash
  uvicorn main:app
 ```
 Измените URL на  
 ```
 http://127.0.0.1:8000/docs
 ```
 Откройте интерфейс OpenAPI.\
 Выберите необходимый запрос,введите данные и нажмите кнопку "EXECUTE".


