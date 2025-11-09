# 🗑️ Smart Waste Collection System (MERN Stack)

A simple **Smart Waste Collection Tracking System** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows municipal officers to **add, view, and manage waste collection records** for different city zones.

---

## 📘 Features

- Add, view, and manage waste collection records.
- Validates that:
  - Collection date is not in the future.
  - Waste quantity must be greater than zero.
- Responsive frontend built with **React + Bootstrap**.
- Backend with **Express.js + Mongoose** connected to **MongoDB**.
- REST API integration for smooth communication between frontend and backend.

---

## 🧠 Tech Stack

| Layer | Technology Used |
|--------|----------------|
| Frontend | React.js, Axios, React Hook Form, Bootstrap |
| Backend | Node.js, Express.js |
| Database | MongoDB (via Mongoose) |
| Version Control | Git & GitHub |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash

Smart-Waste-Collection-System/
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── Waste.js
│   ├── routes/
│   │   └── wasteRoutes.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   │   ├── AddWaste.js
    │   │   └── WasteList.js
    │   └── index.js
    ├── package.json
    └── public/



---

## 🚀 Getting Started (Local Setup)

### Prerequisites
Make sure you have installed:
- **Node.js** (v16 or above)
- **npm** (comes with Node)
- **MongoDB** (local or Atlas cloud version)
- **Git**

---

## 🧭 Step-by-Step Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Aneesh-CLG/Smart-Waste-Collection-System.git
cd Smart-Waste-Collection-System

Go to backend folder:
cd backend

Install dependencies:
npm install

Create a .env file in the backend folder:
MONGO_URI=mongodb://localhost:27017/smartWasteDB
PORT=5000

start the backend server:
node server.js

Move to the frontend directory:
cd ../frontend

Install dependencies:
npm install

Start the React app:
npm start
git clone https://github.com/Aneesh-CLG/Smart-Waste-Collection-System.git
cd Smart-Waste-Collection-System
