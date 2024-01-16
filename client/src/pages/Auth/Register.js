import React, { useState } from "react";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //hook
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState(""); //state to hold the value of fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate(); //we have to create a variable because it's a hook

  //Submit button function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
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
    <Layout title={"Register Page - ECommerce App"}>
      <div className="form-container">
        <h1>Register Page</h1>
        {/* to store data on Submit button */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputName" className="form-label">
              Name
            </label> */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} //to take inputs from the user
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Name"
              required
            />
          </div>
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
            {/* <label htmlFor="exampleInputName" className="form-label">
              Phone
            </label> */}
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputName" className="form-label">
              Address
            </label> */}
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Your Favourite Sports"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
