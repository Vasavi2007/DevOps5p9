

\# Docker Application Commands



\## 1. Navigate to the project folder

cd "C:\\Users\\vasavi m\\Documents\\devOps\\7exp"



\## 2. Build the Docker image

docker build -t mydocapp .



\## 3. Run the container (first time only)

docker run -d --name mycontainer -p 8080:3000 mydocapp



\## 4. Check running containers

docker ps



\## 5. Open the application

start http://localhost:8080



\## 6. Test the application

curl.exe http://localhost:8080



\## 7. View logs

docker logs mycontainer



\## 8. Stop the container

docker stop mycontainer



\## 9. Start the existing container again

docker start mycontainer



