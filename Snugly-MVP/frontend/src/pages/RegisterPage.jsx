import React, { useState } from "react";
import { authService } from "../services/authService";
import "bootstrap/dist/css/bootstrap.min.css";;


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("mother");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(name, email, password, role);
      setMessage("Registration successful!");
    } catch (error) {
      setMessage("Registration failed: " + error.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #f9f5f0 0%, #d6cadd 100%)",
      }}
    >
      <form
        onSubmit={handleRegister}
        className="p-4 rounded shadow"
        style={{
          maxWidth: "380px",
          width: "100%",
          backgroundColor: "#fffefc",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          className="mb-4 text-center"
          style={{
            fontFamily: "'Fredoka One', cursive",
            textTransform: "uppercase",
            color: "#7a6eaa",
            fontWeight: "900",
            fontSize: "2.8rem",
            textShadow:
              "2px 2px 0 #b4aee8, 4px 4px 0 #d6cadd, 6px 6px 5px rgba(0,0,0,0.15)",
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
            style={{ borderColor: "#b4aee8", backgroundColor: "#faf9fb" }}
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
            style={{ borderColor: "#b4aee8", backgroundColor: "#faf9fb" }}
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
            style={{ borderColor: "#b4aee8", backgroundColor: "#faf9fb" }}
          />
        </div>

        <div className="mb-4">
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ borderColor: "#b4aee8", backgroundColor: "#faf9fb" }}
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
            backgroundColor: "#7a6eaa",
            color: "white",
            fontWeight: "600",
          }}
        >
          Register
        </button>

        {message && (
          <div className="mt-3 text-center" style={{ color: "#7a6eaa" }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
