import { createContext, useContext, useState } from "react";

// MAIN STATE OBJECT
export const appState = {
  items: {
    "Fruits and vegetables": [
      {
        name: "Avocade",
        note: "",
        imageURL: "",
        category: "Fruits and vegetables",
        purchased: true,
      },
      {
        name: "Banana",
        note: "",
        imageURL: "",
        category: "Fruits and vegetables",
        purchased: false,
      },
      {
        name: "Mango",
        note: "",
        imageURL: "",
        category: "Fruits and vegetables",
        purchased: true,
      },
    ],
    "Meat and Fish": [
      {
        name: "Moms butt",
        note: "",
        imageURL: "",
        category: "Meat and Fish",
        purchased: false,
      },
      {
        name: "Your butt",
        note: "",
        imageURL: "",
        category: "Meat and Fish",
        purchased: false,
      },
    ],
    Beverages: [
      {
        name: "Wine",
        note: "get naughty",
        imageURL: "",
        category: "Beverages",
        purchased: false,
      },
    ],
    Pets: [],
  },
  history: [],
  currentList: {},
  activeList: {},
};

// APP CREATE CONTEXT
export const appContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [mainappstate, setmainappstate] = useState(appState);

  return (
    <appContext.Provider value={{ mainappstate, setmainappstate }}>
      {children}
    </appContext.Provider>
  );
};

// USE CONTEXT FUNCTION
export function useMainApp() {
  return useContext(appContext);
}
