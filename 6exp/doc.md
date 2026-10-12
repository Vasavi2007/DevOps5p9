## Docker Commands for Content Management

| S.No. | Docker Command                                  | Description                              |
| ----- | ----------------------------------------------- | ---------------------------------------- |
| 1     | `docker --version`                              | Displays Docker version                  |
| 2     | `docker pull nginx`                             | Downloads an image from Docker Hub       |
| 3     | `docker images`                                 | Lists all downloaded images              |
| 4     | `docker ps`                                     | Displays running containers              |
| 5     | `docker ps -a`                                  | Displays all containers                  |
| 6     | `docker run -d -p 8080:80 --name mynginx nginx` | Creates and runs a container             |
| 7     | `docker stop mynginx`                           | Stops a running container                |
| 8     | `docker start mynginx`                          | Starts a stopped container               |
| 9     | `docker restart mynginx`                        | Restarts a container                     |
| 10    | `docker rm mynginx`                             | Removes a stopped container              |
| 11    | `docker rmi nginx`                              | Removes a Docker image                   |
| 12    | `docker inspect mynginx`                        | Displays detailed container information  |
| 13    | `docker logs mynginx`                           | Displays container logs                  |
| 14    | `docker exec -it mynginx sh`                    | Opens a shell inside a running container |
| 15    | `docker cp file.txt mynginx:/tmp/file.txt`      | Copies a file into a container           |
| 16    | `docker volume ls`                              | Lists Docker volumes                     |
| 17    | `docker volume create myvolume`                 | Creates a new volume                     |
| 18    | `docker system df`                              | Displays Docker disk usage               |
| 19    | `docker system prune`                           | Removes unused Docker resources          |
| 20    | `docker login`                                  | Logs in to Docker Hub                    |

Result: Docker commands for managing images, containers, files, volumes, logs, and unused resources were explored.