# Berg - Angular + Java Full Stack Application

This is a full-stack application with an **Angular frontend** and a **Java Spring Boot backend**.

## Project Structure

```
berg/
├── backend/                    # Java Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/berg/backend/
│   │   │   │   ├── BergBackendApplication.java
│   │   │   │   ├── config/
│   │   │   │   │   └── CorsConfig.java
│   │   │   │   └── controller/
│   │   │   │       └── ApiController.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── berg/                       # Angular Frontend
│   ├── src/
│   │   └── app/
│   ├── angular.json
│   └── package.json
│
└── README.md
```

## Getting Started

### Prerequisites
- **Java 17+** (for backend)
- **Maven 3.8+** (for backend)
- **Node.js 18+** (for frontend)
- **npm** or **yarn** (for frontend)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   Or on Windows:
   ```bash
   mvnw.cmd spring-boot:run
   ```

3. The backend will start on **http://localhost:8080**

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd berg
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```
   Or:
   ```bash
   npm start
   ```

4. The frontend will start on **http://localhost:4200**

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check endpoint |
| `/api/info` | GET | Application info |

## Development

- **Frontend**: Angular runs on port `4200`
- **Backend**: Spring Boot runs on port `8080`
- CORS is configured to allow communication between frontend and backend

## Building for Production

### Backend
```bash
cd backend
./mvnw clean package
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd berg
ng build --configuration production
```
