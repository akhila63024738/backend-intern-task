# backend-intern-task
# 🚀 Scalable Task Management Backend

### Developed by: E. Akhila (RGUKT Basar)
**Position:** Backend Developer Intern Task

---

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Security:** JWT (JSON Web Tokens) & Bcrypt (Password Hashing)
- **Architecture:** Modular MVC (Models, Views, Controllers)

## 📁 Project Structure
- `/backend`: Core API logic, routes, and database models.
- `/frontend`: Connectivity dashboard to verify API status.
- `postman_collection.json`: Complete API documentation for testing.

## 🚀 Key Features
- **Scalability:** Designed with separate controllers and routes to handle high traffic and easy maintenance.
- **Security:** Implemented protected routes; only users with a valid JWT can access task management.
- **Efficiency:** Uses MongoDB indexing for faster task retrieval.

## 🚦 How to Test
1. **Clone the repository:** `git clone https://github.com/akhila63024738/backend-intern-task.git`
2. **Install dependencies:** `cd backend && npm install`
3. **Environment Setup:** Create a `.env` file with `MONGO_URI` and `JWT_SECRET`.
4. **Run Server:** `npm start`
5. **API Documentation:** Import `postman_collection.json` into Postman.

## ✅ API Endpoints
- `POST /api/v1/auth/register` - User Registration
- `POST /api/v1/auth/login` - User Login (Returns JWT)
- `GET /api/v1/tasks` - Fetch Tasks (Protected)
- `POST /api/v1/tasks` - Create Task (Protected)
