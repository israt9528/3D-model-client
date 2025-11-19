# Project Name  
3D Model Hub

---



## About the Project 
3D Model Hub is a full-stack web application designed to upload, manage, preview, and share 3D models in a clean and interactive platform. Built for creators, developers, and students, this project allows users to showcase their 3D assets with metadata, categories, and real-time previews.

---

## Project Overview  
The 3D Model Hub equips students and developers with the skills needed to build scalable, media-rich web applications.

---

## Key Features  
1.Users can upload popular 3D formats (.glb, .gltf, .obj), along with thumbnails, categories, and descriptions. Files are stored securely on the server.         2.Each model can be previewed instantly on the browser using a Three.js viewer — users can rotate, zoom, and inspect the model in real time.                     3.Secure login/signup system ensures that users can only manage their own uploaded models. Models are linked to each user via email or user ID.                  4.Models can be organized into categories like characters, vehicles, environments, props, etc., with metadata for easy filtering and searching.                  5.Users get a dedicated dashboard to view, edit, update, or delete their models — making asset management simple and efficient.

---

## Tech Stack  
**Frontend:** React.js · Tailwind CSS · TypeScript  
**Backend:** Node.js · Express.js · MongoDB  
**Tools:** Git · VS Code · Firebase · 

---

## Dependencies  
List required dependencies or major libraries:

```json
"dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "daisyui": "^5.4.5",
    "firebase": "^12.5.0",
    "lucide": "^0.552.0",
    "lucide-react": "^0.552.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.5",
    "sweetalert2": "^11.26.3",
    "tailwindcss": "^4.1.17"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }

```

---

## Installation️ & Setup
1. Clone the repo and install dependencies:

```bash
git clone https://github.com/touhidcodes/Resume-Craft
cd resume-craft
npm install
```

2. Set up environment variables by creating a `.env` file in the root directory:

```env
DATABASE_URL=https://cloud.mongodb.com/v2/6901c9d604bf5e2e01585034#/metrics/replicaSet/6901ca43c34f841b47f2374d/explorer/model-db

```

3. Run the application:

```bash
npm run dev
```

---

## Folder Structure

```plaintext
your-project/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── hooks/
├── public/
└── package.json
```

---

