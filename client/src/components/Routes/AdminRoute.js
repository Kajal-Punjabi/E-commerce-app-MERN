import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom"; //for nested routing
import axios from "axios";
import Spinner from "../Spinner";

//function
export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth(); //destructuring

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/admin-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token.auth]);

  return ok ? <Outlet /> : <Spinner path="" />; //if condition is ok then show outlet otherwise show spinner(Loading)
}
