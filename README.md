# FAQ API (Node.js + Express)

## Overview
This is a backend API for managing FAQs with **multilingual support** using **Node.js, Express.js, MongoDB, and Redis**. The API allows users to store questions and answers, automatically translating them into **Hindi and Bengali** using the Google Translate API.

## 🛠 Tech Stack
- **Node.js** (Backend)
- **Express.js** (Framework)
- **MongoDB** (Database with Mongoose ORM)
- **Redis** (Caching for translations)
- **Google Translate API** (Automated translations)
- **Docker** (Deployment)
- **Mocha & Chai** (Testing)

## 📌 Features
- ✅ Create and manage FAQs.
- ✅ Multilingual support (**English, Hindi, Bengali**).
- ✅ Redis caching for better performance.
- ✅ REST API with **GET** & **POST** endpoints.
- ✅ Docker support for easy deployment.
- ✅ Unit testing with **Mocha & Chai**.
- ✅ Follows **best Git practices**.

## 📂 Project Structure
```
faq-api/
│-- controllers/faqController.js   # API logic
│-- models/FAQ.js                  # Mongoose schema
│-- routes/faqRoutes.js            # API routes
│-- utils/translate.js             # Google Translate & Redis
│-- test/faq.test.js               # Mocha & Chai tests
│-- server.js                       # Main Express app
│-- Dockerfile                      # Docker setup
│-- docker-compose.yml              # Docker services
│-- .env                            # Environment variables
│-- README.md                       # API Documentation
```

---

## ⚙️ Installation
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

### Setup Project
```bash
git clone <repo-url>
cd faq-api
npm install
```

### Configure Environment Variables
Create a `.env` file and update the variables:
```ini
PORT=8000
MONGO_URI=mongodb://localhost:27017/faqdb
REDIS_URL=redis://127.0.0.1:6379
```

### Run the Application
```bash
npm start
```

### Run in Development Mode
```bash
npm run dev
```

---

## 🚀 API Endpoints
### 1️⃣ Create FAQ (POST)
```http
POST /api/faqs/
```
#### 📤 Request Body (JSON)
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime."
}
```
#### 📥 Response
```json
{
  "id": "65b23f7e",
  "question": "What is Node.js?",
  "question_hi": "नोड.जेएस क्या है?",
  "question_bn": "নোড.জেএস কি?",
  "answer": "Node.js is a JavaScript runtime."
}
```

### 2️⃣ Get FAQs (GET)
```http
GET /api/faqs/
```
#### Fetch FAQs in Different Languages
- **English (default)**: `GET /api/faqs/`
- **Hindi**: `GET /api/faqs/?lang=hi`
- **Bengali**: `GET /api/faqs/?lang=bn`

#### 📥 Response
```json
[
  {
    "id": "65b23f7e",
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime."
  }
]
```

---

## 🐳 Run with Docker
```bash
docker-compose up --build
```

---

## 🧪 Running Tests
```bash
npm test
```

---

## 📖 Git Best Practices
Use **meaningful commit messages**:
```bash
git commit -m "feat: Add multilingual FAQ model"
git commit -m "fix: Improve translation caching"
git commit -m "docs: Update README with API examples"
```

---

## 🏆 Acknowledgments
Thanks to **Google Translate API**, **Redis**, and **MongoDB** for making this project possible. 

