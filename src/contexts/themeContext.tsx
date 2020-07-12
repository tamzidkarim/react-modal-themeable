import React, { createContext, useReducer } from "react";

import { themeReducer } from "../reducers/reducer";

type InitialStateType = {
  darkTheme: boolean;
};

const initialState = {
  darkTheme: false,
};

const ThemeContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

type Props = {
  children: React.ReactNode;
};
const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState, () => {
    const currentTheme = localStorage.getItem("theme") === "true";
    return { darkTheme: currentTheme };
  });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
