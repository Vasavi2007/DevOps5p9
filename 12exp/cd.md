# Experiment 12: Spring Boot Testing for a Containerized Application

**Step 1: Extract the ZIP file**  
Download and extract `12exp.zip`. Open the extracted `12exp` folder in PowerShell.

**Step 2: Start Docker Desktop**  
Open Docker Desktop and wait until it is running. Verify using:

```powershell
docker --version
docker ps
```

**Step 3: Build the Docker image**

```powershell
docker build -t 12exp .
```

**Step 4: Run the container**

```powershell
docker run -d --name 12exp-container -p 8080:8080 12exp
```

**Step 5: Verify the application**  
Open these URLs in your browser:

- Home: http://localhost:8080/
- Health: http://localhost:8080/health

Expected results: The home endpoint returns `Hello from Docker!`, and the health endpoint returns `{"status":"healthy"}`.

**Step 6: Run the automated test cases**  
If Java 17 or later and Maven are installed, execute:

```powershell
mvn test
```

The three test cases verify the home endpoint (HTTP 200), health endpoint (HTTP 200), and invalid endpoint (HTTP 404).

**Step 7: Check logs and stop the container**

```powershell
docker logs 12exp-container
docker stop 12exp-container
docker rm 12exp-container
```

**Note:** Run all commands from the project folder containing `Dockerfile` and `pom.xml`. Docker Desktop must be running before building or starting the container.