import { useState, useEffect, createContext, useContext } from "react"; //hooks
import axios from "axios";

const AuthContext = createContext(); //passing hook in a variable like useNavigate custom hook

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    //state that can be accessed anywhere
    //passing the data
    user: null, //object
    token: "",
  });

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    //it's a hook in which we can execute multiple functions
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        //global state
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  //importing AuthContext from Provider   //destructuring
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

//custom hook or customized hook

const useAuth = () => useContext(AuthContext); //now we can access it globally in any component

export { useAuth, AuthProvider };
