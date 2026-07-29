# NOVA Tech Store

NOVA Tech Store is a full-stack e-commerce website developed using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB Atlas. The project provides a modern online shopping experience with secure user authentication and a responsive user interface.

## Features

- User Registration & Login
- Secure Password Hashing (bcrypt)
- JWT Authentication
- MongoDB Atlas Database
- Product API
- Shopping Cart
- Checkout System
- Responsive Design
- Product Categories

## Categories

- Smartphones
- Laptops
- Headphones
- Gaming
- Accessories
- Smart Watches

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- JWT
- bcrypt

### Tools
- Git
- GitHub
- Postman
- VS Code

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/farheen-tahirr/nova-tech-store.git
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Create a `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_secret_key
```

### 4. Start the server

```bash
node server.js
```

### 5. Open the frontend using Live Server.

## API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`

### Products

- GET `/api/products`

## Project Structure

```
ecommerce-site/
│
├── frontend/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── seed.js
│
└── README.md
```

## Author

**Farheen Tahir**

GitHub: https://github.com/farheen-tahirr
