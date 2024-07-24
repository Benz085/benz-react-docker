RUN Docker

### `docker build -t benz-react-docker .`
### `docker build --progress=plain -t benz-react-docker .`
### `docker image build -t benz-react-docker:latest .`
### `docker run -p 3010:3000 benz-react-docker`

  docker run \
    --restart=always -d -p 3000:3000 \
    --name punprodev/benz-react-docker


docker run \
  --restart=always -d -p 5356:3000 \
  --name dev-benz-react-docker benz-react-docker:latest

docker run -dp 8000:3000 --name react-example-container react-docker-example:latest

*********************************************

Docker Hub

### `docker login`
docker tag <image-name:tag> <your-repository>/image-name:image-name-repository
### `docker tag benz-react-docker:latest benz31dev/benz-react-docker:benz-react-docker`
docker push <repository>/<tag>
### `docker push benz31dev/benz-react-docker`
### `docker pull benz31dev/benz-react-docker:latest` >>>> pull local mac
### `docker run -d --name benz-react-docker-dev 35ca5160b7f5`  >>>> local mac

*********************************************
Container Registry

### `docker login registry.gitlab.com`
### `docker build -t registry.gitlab.com/nattapong5/benz-react-docker .`
### `docker push registry.gitlab.com/nattapong5/benz-react-docker`

*********************************************


