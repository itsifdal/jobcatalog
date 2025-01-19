# Job Catalog

## Overview
This application demonstrates basic CRUD operations, user authentication (Registration & Login), and user profile. It is built with Express.js, Sequelize (ORM), MySql, and JSON Web Tokens (JWT). 

## Features
- **Items CRUD Operations**: Create, Read, Update, and Delete.
- **Authentication**: User Registration, Login, and JWT-based route protection.
- **User Profile**: Fetch the authenticated user’s profile.

## Installation
1. **Clone the repository and Open in Editor:**
   ```bash
   git clone <url>
   cd jobcatalog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the database:**
   - Create a MySQL database named `jobcatalog`.
   - Update the `config/config.json` file with your db credentials.

4. **Start the server:**
   ```bash
   npm run dev
   ```
   It will migrate also the database content.
   The server will run on `http://localhost:8000`.

5. **Run the Migrations:**
   ```bash
   npx sequelize-cli db:migrate
   ```

6. **Run the Seed (Job Items):**
   ```bash
   npx sequelize-cli db:seed:all
   ```

## Endpoints
### 1. **Authentication**
#### **Register User**
- **Endpoint:** `POST /auth/register`
- **Description:** Create a new user account.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response (Success):**
  ```json
  {
    "message": "Registration is successful!"
  }
  ```
- **Response (Error):**
  ```json
  {
    "message": "Email already exists"
  }
  ```

#### **Login User**
- **Endpoint:** `POST /auth/login`
- **Description:** Authenticate the user and generate a JWT.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response (Success):**
  ```json
  {
    "token": "<JWT_TOKEN>"
  }
  ```
- **Response (Error):**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### 2. **Profile**
#### **Get Profile**
- **Endpoint:** `GET /users/profile`
- **Description:** Fetch the authenticated user’s profile.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```
- **Response (Success):**
  ```json
  {
    "id": 1,
    "email": "user@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
  ```
- **Response (Error):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### 3. **Items**
#### **Create Item**
- **Endpoint:** `POST /items`
- **Description:** Create a new item (protected route).
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```
- **Request Body:**
  ```json
  {
    "title": "Data Scientist",
    "description": "Machine Learning & AI Research",
    "company": "Nova Analytics",
    "location": "New York",
    "type": "Hybrid"
  }
  ```
- **Response (Success):**
  ```json
  {
    "message": "Item created successfully",
    "item": {
      "id": 1,
      "title": "Data Scientist",
      "description": "Machine Learning & AI Research",
      "company": "Nova Analytics",
      "location": "New York",
      "type": "Hybrid",
      "userId": 1
    }
  }
  ```

#### **Get All Items**
- **Endpoint:** `GET /items`
- **Description:** Fetch all items.
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Data Scientist",
      "description": "Machine Learning & AI Research",
      "company": "Nova Analytics",
      "location": "New York",
      "type": "Hybrid"
    }
  ]
  ```

#### **Update Item**
- **Endpoint:** `PUT /items/:id`
- **Description:** Update an item (protected route, only the owner can update).
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description"
  }
  ```
- **Response (Success):**
  ```json
  {
    "message": "Item updated successfully"
  }
  ```

#### **Delete Item**
- **Endpoint:** `DELETE /items/:id`
- **Description:** Delete an item (protected route, only the owner can delete).
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```
- **Response (Success):**
  ```json
  {
    "message": "Item deleted successfully"
  }
  ```

## Testing with Postman

Collection Link : `https://www.postman.com/lunar-zodiac-500433/workspace/job-catalog/collection/20067673-a64603af-2cda-4791-b728-f65f468ef6e2?action=share&creator=20067673&active-environment=20067673-e2b87ebe-41b2-4557-af1b-4e48190f056a`


