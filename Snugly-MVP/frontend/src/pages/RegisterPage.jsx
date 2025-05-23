import React, { useState } from "react";
import { authService } from "../services/authService";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

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
        background:
          "linear-gradient(135deg, #fce4ec, #e0f7fa, #fff9c4, #f3e5f5)",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="p-4"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "24px",
          background: "#ffffff",
          border: "2px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
      >
        <h2
          className="mb-4 text-center position-relative"
          style={{
            fontFamily: "'Fredoka One', cursive",
            textTransform: "uppercase",
            fontWeight: "900",
            fontSize: "2.6rem",
            letterSpacing: "0.12em",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              color: "rgba(0, 0, 0, 0.15)",
              zIndex: 0,
              transform: "translate(2px, 4px)", 
              filter: "blur(2px)", 
            }}
          >
            Register
          </span>
          <span
            style={{
              background:
                "linear-gradient(to right, #c2e9fb, #f3e5f5, #fff9c4, #e0f7fa, #fce4ec)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              zIndex: 1,
            }}
          >
            Register
          </span>
        </h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            style={{
              backgroundColor: "#fff",
              borderColor: "#F8A5C2",
              borderRadius: "10px",
            }}
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
            style={{
              backgroundColor: "#fff",
              borderColor: "#FBC490",
              borderRadius: "10px",
            }}
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
            style={{
              backgroundColor: "#fff",
              borderColor: "#A8E6CF",
              borderRadius: "10px",
            }}
          />
        </div>

        <div className="mb-4">
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              backgroundColor: "#fff",
              borderColor: "#D6AEDD",
              borderRadius: "10px",
            }}
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
            background:
              "linear-gradient(to right, #c2e9fb, #f3e5f5, #fff9c4,#e0f7fa, #fce4ec)",
            color: "#a8b8d0",
            fontWeight: "600",
            border: "none",
            borderRadius: "14px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          REGISTER
        </button>

        {message && (
          <div
            className="mt-3 text-center"
            style={{ color: "#a1735f", fontWeight: "500" }}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
