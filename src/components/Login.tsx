import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../contexts/userContext";

type Inputs = {
  username: string;
  password: string;
};

interface Props {
  onClose: () => void;
}
interface IUser {
  name: string;
}

export const Login: React.FC<Props> = ({ onClose }) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { dispatch } = useContext(UserContext);

  const onSubmit = (data: Inputs) => {
    dispatch({ type: "SET_USER", username: data.username });
    onClose();
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <ul>
          <li>
            {" "}
            <label>
              Username:
              <input
                type='text'
                name='username'
                className='username'
                placeholder='username'
                ref={register({ required: true })}
                required
              />
            </label>
          </li>
          <li>
            <label>
              Password:
              <input
                type='password'
                name='password'
                className='password'
                placeholder='password'
                ref={register({ required: true })}
                required
              />
            </label>
          </li>
          <div className='button-form'>
            <button className='button-form-btn' type='submit'>
              Log In
            </button>
          </div>
        </ul>
      </form>
    </>
  );
};
