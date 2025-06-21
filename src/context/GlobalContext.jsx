import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };
