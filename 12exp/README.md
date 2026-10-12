# Experiment 12: Spring Boot Testing for a Containerized Application

## Application endpoints
- `GET /` returns a welcome message.
- `GET /health` returns the health status.
- An unknown endpoint returns HTTP 404.

## Test cases included
1. Home endpoint returns HTTP 200 and the expected message.
2. Health endpoint returns HTTP 200 and `healthy`.
3. Unknown endpoint returns HTTP 404.

Tests use JUnit 5, Spring Boot Test, `@WebMvcTest`, and `MockMvc`.

## Requirements
- Java 17 or later
- Maven 3.6+ OR Docker Desktop running

## Run tests locally (PowerShell)
Open PowerShell in the `12exp` project directory:

```powershell
mvn test
```

To build the executable JAR:

```powershell
mvn package
```

To run the app locally:

```powershell
java -jar target/12exp.jar
```

Open `http://localhost:8080` and `http://localhost:8080/health`.

## Build and run with Docker
Docker can build the app without requiring Maven to be installed on your computer:

```powershell
docker build -t 12exp .
docker run --name 12exp-container -p 8080:8080 12exp
```

Open `http://localhost:8080`.

To stop and remove the container:

```powershell
docker stop 12exp-container
docker rm 12exp-container
```

If the container name is already in use:

```powershell
docker rm -f 12exp-container
```

## Project structure
```text
12exp/
├── pom.xml
├── Dockerfile
├── .dockerignore
├── README.md
└── src/
    ├── main/java/com/example/twelveexp/
    │   ├── TwelveExpApplication.java
    │   └── HelloController.java
    └── test/java/com/example/twelveexp/
        └── HelloControllerTest.java
```
