# App Manager By Benomads

## Intro: Deployment Documentation

**appManager** is a web application created by **Benomads** that allows users to deploy containerized microservices via a user-friendly interface. Once the microservices are configured in Docker, the user can connect to the **Benomads Developer API** to generate an API token. This token is submitted as an environment variable, allowing the user to deploy their application as a white-label solution via the appManager GUI.

The frontend is built using **React**, while the backend is developed with **Node.js**. The entire application is containerized using Docker to facilitate microservice deployments.

---

## Table of Contents

1. [Features](#features)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Environment Variable Configuration](#environment-variable-configuration)
5. [How to use](#how-to-use)
6. [Default Endpoints](#default-endpoints)
7. [Application Architecture](#application-architecture)
8. [Deployment](#deployment)
9. [API](#api)
10. [Contribution](#contribution)
11. [Contact and Support](#contact-and-support)

---

## Features

- **Containerized Project Deployment**: Deploy projects using Docker microservices via the appManager GUI.
- **Developer API Integration**: Authenticate with the **Benomads Developer API** to generate and manage deployment tokens.
- **White-label Deployment**: Deploy your web application as a white-label solution through the GUI as many times as needed.
- **Environment Variable Setup**: Configure environment variables and API tokens for authentication.
- **Reproducible JSON Configuration**: Use a JSON file at the project root to represent and configure services.

---

## Requirements

Ensure the following tools are installed on your machine before starting:

- **Node.js** (v14+)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **Git**

---

## Installation

1. Clone the GitHub repository:
    ```bash
    git clone https://github.com/benomads/appManager.git
    cd appManager
    ```

2. Install dependencies for both the frontend and backend:
    ```bash
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```

---

## Environment Variable Configuration

Before deploying, you need to configure the environment variables for the backend. Here's an example `.env` file to place in the backend directory:

```bash
MONGO_USER=root
MONGO_PASSWORD=example
MONGO_URL=mongodb://mongodb
APP_PORT=5000
API_TOKEN=<your_benomads_api_token> # Not required to start the project
```

---

## HOW TO USE

```bash
docker-compose up --build
```

---

## Default Endpoints

```bash
frontend: `http://localhost:8887`
backend: `http://localhost:5000`
mongo-express: `http://localhost:8082`
```

---

## Application Architecture

appManager is composed of several microservices:

```yaml
Frontend (React): Manages the user interface for configuration and deployment.
Backend (Node.js): Manages APIs for deployment, backend configuration, and database connections.
MongoDB: Used as the database for storing configurations and logs.
```

---

## Deployment

To deploy a project via the appManager interface, follow these steps:

1. Prepare your project: Ensure your microservices are Dockerized and the environment variables are set correctly.
2. Generate API Token: Retrieve the API token from the Benomads Developer API and set it in your environment variables.
3. Add your project JSON: Create a JSON file at the root of your project (as shown in the Project JSON Format section).
4. Deploy: Use the appManager GUI to deploy your services. You can deploy as many times as needed, and the project will be hosted as a white-label solution.

---

## API

appManager exposes REST APIs for automating deployments and managing configurations.
Key Endpoints:

None

---

## Contribution

1. Fork the repository.
2. Create a new branch (feature-xyz).
3. Make your changes.
4. Push to your branch.
5. Open a Pull Request.

We welcome all contributions to improve the app!

---

## Contact and Support

For any questions, suggestions, or contributions, feel free to reach out via our social media channels:

- **Twitter**: [@Benomads](https://x.com/benomads_fr)
- **LinkedIn**: [Benomads](https://linkedin.com/company/benomads)
- **Tiktok**: [Benomads](https://www.tiktok.com/@benomads.fr)

---