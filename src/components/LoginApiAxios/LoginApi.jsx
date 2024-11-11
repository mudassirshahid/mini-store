import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginApi = () => {
  const navigate = useNavigate();

  const [loginApi, setLoginApi] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleLoginApi = (e) => {
    const { name, value } = e.target;
    setLoginApi((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApi = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { email, password } = loginApi;

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      alert("Login successfully");
      localStorage.setItem("token", response.data.token);
      setLoginApi({ email: "", password: "" }); // Reset form fields
      navigate("/products");
    } catch (error) {
      console.error("Error logging in:", error.response ? error.response.data : error.message);
      alert(error.response?.data?.error || "Service error"); // Display error message from API if available
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto">
      <h2 className="text-2xl font-semibold my-5">Login User</h2>
      <form onSubmit={handleApi}>
        <div className="flex flex-col justify-center items-center m-auto gap-2">
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginApi.email}
            onChange={handleLoginApi}
            className="border p-1 m-2"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginApi.password}
            onChange={handleLoginApi}
            className="border p-1 m-2"
            required
          />
        </div>
        <div>
        <button type="submit" className="bg-slate-400 p-3 rounded-lg my-2">
          Login
        </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default LoginApi;
