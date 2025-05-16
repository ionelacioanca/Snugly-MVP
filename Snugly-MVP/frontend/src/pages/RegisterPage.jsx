import React, {useState} from "react";
import { authService } from "../services/authService";

export const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [message, setMessage] = useState("");
   
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await authService.register(name, email, password, role);
            setMessage("Registration successful! ");
        } catch (error) {
            setMessage("Registration failed: " + error.message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="mother">Mother</option>
        <option value="father">Father</option>
        <option value="nanny">Nanny</option>
        <option value="others">Others</option>
      </select>
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegisterPage;