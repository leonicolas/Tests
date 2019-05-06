createdb:
  docker run -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -p 127.0.0.1:27017:27017 --name mongo mongo
