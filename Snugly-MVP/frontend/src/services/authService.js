
const API_URL = 'http://localhost:5000/api';

const register = async (name, email, password, role) => {
    console.log({ name, email, password, role });

    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
    });

    const data = await response.json();
    if(response.ok) {
        return data;
    } else {
        throw new Error(data.message || 'Registration failed');
    }
};

const login = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if(response.ok) {
        return data;
    } else {
        throw new Error(data.message || 'Login failed');
    }
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
};

const getToken = () => localStorage.getItem('token');
const getRole = () => localStorage.getItem('role');

export const authService = {
    register,
    login,
    logout,
    getToken,
    getRole,
};
