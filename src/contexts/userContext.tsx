import React, { createContext, useReducer, useEffect } from "react";

import { userReducer } from "../reducers/reducer";

type InitialStateType = {
  username: string;
};

const initialState = {
  username: (localStorage.getItem("user") as string) || "",
};

const UserContext = createContext<{
  user: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  user: initialState,
  dispatch: () => null,
});

type Props = {
  children: React.ReactNode;
};
const UserProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", user.username);
    return () => {};
  }, [user.username]);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
