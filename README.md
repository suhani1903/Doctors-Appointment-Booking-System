# 🏥 Doctor Appointment Booking System (MERN Stack)

This is a **web-based application** developed using the **MERN** stack:  
**MongoDB, Express.js, React.js, and Node.js**.

It allows patients to book appointments with doctors and provides **role-based access** for patients, doctors, and admins.

---

## ✨ Key Features

- 👤 **Patient registration and login**
- 🩺 **Doctor registration with admin approval**
- 📅 **Appointment booking by patients**
- 🧑‍⚕️ **Doctor dashboard** to manage appointments
- 🛠️ **Admin panel** to manage users and doctor requests
- 🔐 **JWT-based authentication and authorization**

---

## 🧰 Technologies Used

### 🔹 Frontend
- React.js  
- React Router  
- Axios  

### 🔹 Backend
- Node.js  
- Express.js  

### 🔹 Database
- MongoDB  
- Mongoose  

### 🔐 Authentication
- JSON Web Tokens (JWT)  

### 📁 Optional Features
- Multer (for image/file upload)  
- Moment.js (for date/time formatting)  
- dotenv (for managing environment variables)  

---

## 🚀 Getting Started

### 📦 Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 📁 Install Dependencies

#### 🔸 Backend
```bash
cd backend
npm install
```

#### 🔸 Frontend
```bash
cd ../frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the **backend** folder with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🖥️ Running the App

### ▶️ Start Backend
```bash
cd backend
npm start
```

### ▶️ Start Frontend
```bash
cd ../frontend
npm start
```




