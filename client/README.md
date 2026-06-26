# 💻 BLOGGERR — Client Dashboard & Public Feed

This directory contains the React frontend codebase for **BLOGGERR**.

For detailed setup, environment variables, full-stack workflow diagrams, and backend API references, please see the **[Main Project README.md](../README.md)**.

## 🚀 Key Libraries & Integrations
*   **Vite + React 19**
*   **Tailwind CSS (v4)**: High-performance utility styling.
*   **Quill.js**: Used in the admin suite to draft blogs.
*   **Marked.js**: Parses markdown content returned from the local AI LLM generator.
*   **Motion (Framer)**: Custom micro-interactions and transitions.
*   **Axios**: Communicates with the Express API server.
*   **React Hot Toast**: Beautiful state and event alert notifications.

## 🛠️ Commands
Make sure your environment variables in `.env` are configured.

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint validation
npm run lint
```
