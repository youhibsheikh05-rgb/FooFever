import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid" style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/users/login" element={<Login />} exact />
            <Route path="/users/signup" element={<Register />} exact />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;