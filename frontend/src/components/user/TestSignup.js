import React, { useState } from "react";
import axios from "axios";

const TestSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("passwordConfirm", passwordConfirm);
    formData.set("phoneNo", phoneNo);
    if (avatar) formData.set("avatar", avatar);

    try {
      const { data } = await axios.post("/api/v1/users/signup", formData);
      setMessage("Success! User created: " + data.user.name);
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div style={{ padding: "50px", maxWidth: "500px", margin: "auto" }}>
      <h2>Test Signup Page</h2>
      {message && <div style={{ padding: "10px", background: "#eee", margin: "10px 0" }}>{message}</div>}
      <form onSubmit={submitHandler}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
        </div>
        <div>
          <label>Phone No: </label>
          <input type="number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
        </div>
        <div>
          <label>Avatar (Photo): </label>
          <input type="file" onChange={(e) => setAvatar(e.target.files[0])} required />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Signup Test</button>
      </form>
    </div>
  );
};

export default TestSignup;