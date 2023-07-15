docker run 
  --name postgres 
  -e POSTGRES_USER=caua 
  -e POSTGRES_PASSWORD=senha1 
  -e POSTGRES_DB=heroes 
  -p 5432:5432 
  -d 
  postgres

enter in container with: docker exec -it postgres bash

docker run 
  --name adminer 
  -p 8080:8080 
  --link postgres:postgres 
  -d 
  adminer 

## ---- MONGODB

docker run 
  --name mongodb 
  -p 27017:27017 
  -e MONGO_INITDB_ROOT_USERNAME=xavier 
  -e MONGODB_INITDB_ROOT_PASSOWORD=senha3 
  -d 
  mongo

docker run
  --name mongoclient 
  -p 8081:3000
  --link mongodb:mongodb 
  -d 
  mongoclient/mongoclient 

  
docker exec -it mongodb 
  mongosh --host localhost -u xavier -p senha3 --authenticationDatabase admin  
  --eval "db.getSiblingDB('heroes').createUser({user: 'gomes', pwd: 'senhasecreta', roles: [{role: 'readWrite', db: 'heroes'}]})"
