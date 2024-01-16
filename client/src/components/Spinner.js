import React, { useState, useEffect } from "react"; //to get at initial state useEffect is used
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3); //3 secs of loading spinner initially
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000); //1 sec count
    count === 0 && //if count is 0 then navigate it to login
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }} //to give height and to locate the spinner in center
      >
        <h1 className="Text-center">
          Redirecting you to Login in {count} second(s)...{" "}
        </h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
