import { useState, createContext, useContext } from "react"; //hooks

const SearchContext = createContext(); //passing hook in a variable like useNavigate custom hook

const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keyword: "", //initially null
    results: [], //array
  });

  //importing AuthContext from Provider   //destructuring
  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

//custom hook or customized hook

const useSearch = () => useContext(SearchContext); //now we can access it globally in any component

export { useSearch, SearchProvider };
