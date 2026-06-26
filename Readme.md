# 🎥 StreamX Backend

> A scalable RESTful backend for **StreamX**, a YouTube-inspired video streaming platform built with **Node.js**, **Express.js**, and **MongoDB**.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-success?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Cloudinary-Image%20Upload-blue?style=for-the-badge" />
</p>

---

## 📖 About

StreamX Backend is a production-ready REST API powering a video streaming platform similar to YouTube.

The backend provides secure authentication, user management, subscriptions, watch history, profile management, and media upload functionality while following modern backend architecture and best practices.

---

# ✨ Features

- 🔐 JWT Authentication
- 🔄 Access Token & Refresh Token
- 🍪 Secure Cookie Authentication
- 👤 User Registration & Login
- 📸 Avatar Upload
- 🖼 Cover Image Upload
- ☁️ Cloudinary Integration
- 📺 User Channel Profile
- 👥 Subscribe / Unsubscribe Channels
- ❤️ Like System
- 📝 Watch History
- 📦 MongoDB Aggregation Pipelines
- 🛡 Protected Routes
- ⚡ Async Error Handling
- 📄 Standardized API Responses
- 📂 MVC Project Structure

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- bcrypt

### File Upload

- Multer
- Cloudinary

### Other Libraries

- Cookie Parser
- CORS
- dotenv
- mongoose-aggregate-paginate-v2

---

# 📁 Project Structure

```
src
│
├── controllers
├── models
├── routes
├── middlewares
├── utils
├── db
├── constants
├── app.js
└── index.js
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Hamimsiddiq007/streamx_backend.git

cd streamx_backend
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=

MONGODB_URI=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

CORS_ORIGIN=
```

---

## Start Development Server

```bash
npm run dev
```

---

## Production

```bash
npm start
```

---

# 🔐 Authentication

The project uses:

- JWT Access Token
- JWT Refresh Token
- HTTP Only Cookies
- Protected Middleware

---

# 📦 API Modules

## Authentication

- Register
- Login
- Logout
- Refresh Access Token
- Change Password

---

## User

- Get Current User
- Update Account
- Update Avatar
- Update Cover Image
- Watch History

---

## Channel

- Get Channel Profile
- Subscriber Count
- Subscribed Count

---

## Subscription

- Subscribe Channel
- Unsubscribe Channel

---

## Future Features

- 🎥 Video Upload
- 👍 Video Likes
- 💬 Comments
- 📃 Playlist
- 🔔 Notifications
- 🔍 Search API

---

# 🏗 Architecture

```
Client
      │
      ▼
 Express Routes
      │
      ▼
 Controllers
      │
      ▼
 Models (Mongoose)
      │
      ▼
 MongoDB
```

---

# 📌 Best Practices

- MVC Architecture
- Reusable Middleware
- Async Handler
- Custom API Error Class
- Custom API Response
- Environment Variables
- Secure Authentication
- Modular Code Structure

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Hamim Siddiq**

GitHub:
https://github.com/Hamimsiddiq007

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It motivates me to continue building open-source projects.
