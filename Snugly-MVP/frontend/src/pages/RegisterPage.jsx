import React, { useState } from "react";
import { authService } from "../services/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("mother");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(name, email, password, role);
      setMessage("Registration successful!");
      navigate("/baby");
    } catch (error) {
      setMessage("Registration failed: " + error.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #fdf8f2 0%, #f0e7db 100%)",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="p-4 rounded shadow"
        style={{
          maxWidth: "380px",
          width: "100%",
          backgroundColor: "#fffdf8",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          className="mb-4 text-center"
          style={{
            fontFamily: "'Fredoka One', cursive",
            textTransform: "uppercase",
            color: "#b59f89",
            fontWeight: "900",
            fontSize: "2.8rem",
            textShadow:
              "2px 2px 0 #e8dccb, 4px 4px 0 #f0e7db, 6px 6px 5px rgba(0,0,0,0.1)",
            letterSpacing: "0.15em",
          }}
        >
          REGISTER
        </h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            style={{ borderColor: "#decbb2", backgroundColor: "#fefaf6" }}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={{ borderColor: "#decbb2", backgroundColor: "#fefaf6" }}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={{ borderColor: "#decbb2", backgroundColor: "#fefaf6" }}
          />
        </div>

        <div className="mb-4">
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ borderColor: "#decbb2", backgroundColor: "#fefaf6" }}
          >
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="nanny">Nanny</option>
            <option value="others">Others</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: "#b59f89",
            color: "white",
            fontWeight: "600",
          }}
        >
          Register
        </button>

        {message && (
          <div className="mt-3 text-center" style={{ color: "#b59f89" }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
