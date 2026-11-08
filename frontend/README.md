# FooFever - MERN Stack Food Delivery App 🍔

A full-stack food delivery web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to browse restaurants, view dynamic menus, add food items to the cart, and proceed to checkout.

## 🚀 Key Features
- **User Authentication**: Secure Login and Signup using JWT.
- **Browse Restaurants**: View multiple restaurants with their ratings and locations.
- **Dynamic Menus**: Each restaurant has its own unique menu and food items.
- **Shopping Cart**: Add, remove, and update food quantities seamlessly.
- **Modern UI**: Clean, responsive, and modern design using React and custom CSS.
- **PKR Currency**: Prices are displayed in Pakistani Rupees (Rs.).

## 💻 Tech Stack
- **Frontend**: React.js, Redux, React Router, Bootstrap, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/youhibsheikh05-rgb/FooFever.git
   cd FooFever
   ```

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

4. **Environment Variables:**
   Create a `config.env` file in the `backend/config/` folder and add:
   ```env
   PORT=4000
   DB_LOCAL_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Run the Application:**
   - **Backend:** `npm run dev` (inside `backend` folder)
   - **Frontend:** `npm start` (inside `frontend` folder)

## 👨‍💻 Author
**Youhibbullah Sheikh**
- GitHub: [@youhibsheikh05-rgb](https://github.com/youhibsheikh05-rgb)
- LinkedIn: [Youhib Sheikh](https://www.linkedin.com/in/youhib-sheikh-b63a15381)
``