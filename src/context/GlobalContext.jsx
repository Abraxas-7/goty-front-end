import { createContext, useContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // fetch or thing to ad to the context

  return (
    <GlobalContext.Provider
      value={
        {
          // thins added to the context
        }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };
