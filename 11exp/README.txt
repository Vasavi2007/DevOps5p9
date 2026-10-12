11exp - JavaScript Calculator API with Karate Tests

Requirements:
- Node.js and npm
- Java 17
- Maven

Run:
1. Open PowerShell in this folder.
2. Install Node dependencies: npm install
3. Start the API and keep this terminal open: node server.js
4. Open a second terminal in this folder.
5. Run Karate tests: mvn -U clean test

Optional standalone calculator: npm run calculator

API endpoints:
- http://localhost:3000/add?a=10&b=5
- http://localhost:3000/multiply?a=10&b=5
