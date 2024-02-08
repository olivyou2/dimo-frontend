docker build -t dimo-front .

docker kill dimo-front
docker rm dimo-front

docker run -d -p 4173:4173 --name dimo-front dimo-front