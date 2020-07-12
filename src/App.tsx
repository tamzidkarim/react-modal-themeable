import React, { useState, useContext } from "react";
import "./assets/App.scss";

import { Dialog } from "./components/Dialog";
import { ThemeContext } from "./contexts/themeContext";
import { UserContext } from "./contexts/userContext";

export const App: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { state } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  console.log(user.username);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={state.darkTheme ? "App Dark" : "App"}>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className='button-login'
      >
        {user.username ? `Logged in as ${user.username}` : "Log In"}
      </button>
      {open && <Dialog onClose={onClose} />}
    </div>
  );
};

export default App;
