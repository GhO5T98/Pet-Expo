import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  // useEffect hook to check if a token exists in local storage and validate it.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/Dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setAdmin(true);
        })
        .catch((err) => {
          setAdmin(false);
        });
    }
  }, []);

  // Function to handle login.
  const login = async (username, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setAdmin(true);
    } catch (error) {
      console.error("Error logging in:", error.response.data.message);
      throw new Error(error.response.data.message);
    }
  };

  // Function to handle registration.
  const register = async (username, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/register", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setAdmin(true);
    } catch (error) {
      console.error("Error registering:", error.response.data.message);
      throw new Error(error.response.data.message);
    }
  };

  // Function to handle logout.
  const logout = () => {
    localStorage.removeItem("token");
    setAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ admin, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
