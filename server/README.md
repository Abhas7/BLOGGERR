# 🗄️ BLOGGERR — Express API Server

This directory contains the Express backend service for **BLOGGERR**.

For full-stack system architecture diagrams, database schemas, environments setup, and detailed API documentation, please see the **[Main Project README.md](../README.md)**.

## 🚀 Key Libraries & Configs
*   **Express (v5.x)**: Handles public and administrative endpoints.
*   **Mongoose**: Connects and structures MongoDB database models.
*   **Ollama**: Connects locally to generate text using model `llama3.2:1b` / `llama3.1`.
*   **ImageKit**: Cloud storage integration for image upload, delivery, and real-time optimization.
*   **JWT (jsonwebtoken)**: Signs and verifies tokens for administrator sessions.
*   **Multer**: Handles multipart form submissions for blog image uploads.

## 🛠️ Commands
Make sure your environment variables in `.env` are configured.

```bash
# Install dependencies
npm install

# Start Express server with nodemon tracking
npm run server

# Start server in production mode
npm start
```
