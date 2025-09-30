# Budget Tracker Backend

This is the **backend API** for the **Budget Tracker** web application. It provides endpoints for:

- User authentication (register, login)
- Transaction management (add, list, delete)
- Total balance calculations

The backend is built with **Node.js**, **Express**, and **MongoDB**, and uses **JWT** for secure authentication.

---

## Features

- RESTful API endpoints
- JWT authentication and authorization
- CRUD operations for transactions
- Easy integration with frontend
- Modern JavaScript (ES6+) code structure

---

## Installation

Follow these steps to run the backend locally:

### **1. Clone the repository**

```bash
git clone <repo-url>
cd budget-tracker-backend

```

### **2. Install dependencies**

```bash
npm install

```

### **3. Create a .env file**

Create a .env file in the root folder and add the following variables:

MONGO_URI=here_add_mongodb_connection_string <br>
JWT_SECRET=here_add_jwt_secret_key <br>
PORT=5000

### **4. Start the server**
For development with hot reload (using nodemon):

```bash
npm run dev

```
For production:

```bash
node server.js

```

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** & **Mongoose**
- **JWT** (JSON Web Token)
- **bcryptjs** (password hashing)
- **dotenv** (environment variables)
- **Nodemon** (development)