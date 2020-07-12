import React from "react";
import { useClickOutsideListenerRef } from "../hooks/useClickOutsideListenerRef";
import { Login } from "./Login";
import { AiTwotoneCloseSquare } from "react-icons/ai";
import Switch from "./Switch";

export interface IDialogProps {
  onClose: () => void;
}

export const Dialog: React.FC<IDialogProps> = (props) => {
  const { onClose } = props;
  const ref = useClickOutsideListenerRef(onClose);

  const handleClick = () => {
    onClose();
  };
  return (
    <div className='overlay'>
      <div className='container'>
        <div ref={ref} className='wrapper'>
          <div onClick={handleClick} className='close-button'>
            <AiTwotoneCloseSquare />
          </div>
          <Switch />
          <div className='login-container'>
            <Login onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};
