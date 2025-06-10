import React, { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setMessage("Vui lòng điền đầy đủ tất cả các trường.");
      return;
    }

    console.log("Thông tin đăng ký:", { name, email, password });
    setMessage("Đăng ký thành công! Kiểm tra để xem thông tin.");

    //  submit
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registration-form-container">
      <h2>Đăng Ký Tài Khoản</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Tên:</label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Đăng Ký
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
}

export default RegistrationForm;
