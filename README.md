# 🛍️ Sroka - Full Stack E-Commerce Web App

Sroka is a feature-rich, responsive, full-stack e-commerce application built using the **MERN stack (MongoDB, Express, React, Node.js)**. It supports secure user authentication, product management, cart operations, Stripe payments, and an admin dashboard for monitoring statistics.
### 💻 Frontend
- React.js (with Hooks & Router)
- Axios for API calls
- Tailwind CSS (or Bootstrap)
- Context API / Redux (if used)

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB (via Atlas)
- Mongoose
- Stripe API for Payments
- JWT for Authentication
- Body-parser
- CORS

---

## 🗂️ Features

### 👤 User Features
- Register / Login with JWT
- View products and product details
- Add to cart, remove from cart
- Secure Stripe payment
- Order success screen

### 🛠️ Admin Features
- Add / Edit / Delete products
- View all users
- View all orders
- Dashboard stats (Total Sales, Users, Orders)

---

## 🧪 API Usage (Tested with Postman)
- RESTful API architecture
- Routes: `/api/products`, `/api/users`, `/api/orders`
- Authentication middleware to protect routes
- Secure payment handled via Stripe
- Environment variables managed via `.env` file

---

## 🔐 Security
- JWT Authentication
- Protected Routes with middleware
- Secrets stored in `.env` (not pushed to GitHub)
- GitHub Secret Scanning protection handled

root/
│
├── frontend/ # React frontend
│ └── src/
│ └── components/
│ └── pages/
│ └── App.js
│
├── backend/ # Node + Express backend
│ └── controllers/
│ └── routes/
│ └── models/
│ └── server.js / index.js
│
└── .env
