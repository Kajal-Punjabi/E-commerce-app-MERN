import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //hook
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate(); //we have to create a variable because it's a hook

  //Submit button function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
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
    <Layout title={"Forgot Password - ECommerce App"}>
      <div className="form-container">
        <h1>Reset Password</h1>
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
            {/* <label htmlFor="exampleInputName" className="form-label">
              E-Mail
            </label> */}
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Favourite Sports"
              required
            />
          </div>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label> */}
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Your New Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            RESET
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
