import React, { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom"; //hook
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate(); //we have to create a variable because it's a hook
  const location = useLocation();

  //Submit button function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth, //to save previous values as it is(spread operator)
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data)); //localStorage doesn't support JSON data so we have to convert it into string
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    // console.log(name, email, password, address, phone);
    // //toast message notification(with success it will appear in green & with error object it will be in red)
    // toast.success("Registered Successfully!"); //similar to alert pop-up
  };

  return (
    <Layout title={"Register Page - ECommerce App"}>
      <div className="form-container">
        <h1>Login Page</h1>
        {/* to store data on Submit button */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputName" className="form-label">
              E-Mail
            </label> */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your E-Mail"
              required
            />
          </div>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label> */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password"); //redirecting to the forgot-password page using inline function
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
