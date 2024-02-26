import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginuser } from "../../store/thunks-slices/registorthunks";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const users = useSelector((state) => state.users.users);
  const compitd = useSelector((state) => state.users.compitd);

  const dispatch = useDispatch();

  function Handlersumbit(UserData) {
    console.log(UserData);
    dispatch(loginuser({ UserData, navigate }));
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <LoginContainer>
      <form onClick={handleSubmit(Handlersumbit)}>
        <input
          {...register("email", {
            required: { value: true, message: "Заполните поле" },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "пример: exemple@gmail.kg!",
            },
          })}
          type="email"
          placeholder="введите почту"
          name="email"
        />
        <input
          {...register("password", {
            required: { value: true, message: "Заполните поле" },
            minLength: {
              value: 6,
              message: "пароль должен быть больше 6 символов",
            },
          })}
          type="password"
          placeholder="введите пароль"
          name="password"
        />
        <button type="sumbit" disabled={loading}>
          входы
        </button>
        {error && <p>Error: {error}</p>}
      </form>
    </LoginContainer>
  );
};

export default Login;
const LoginContainer = styled("div")`
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  margin: 0 auto;
  margin-top: 200px;
  padding-top: 50px;
  padding: 10px 0 20px;
  border-radius: 50px;
  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px 20px;
    input {
      width: 95%;
      height: 45px;
      padding-left: 15px;
      border-radius: 10px;
    }
    button {
      width: 100%;
      height: 45px;
      background: teal;
      font-size: 24px;
      font-weight: 500;
      color: white;
      border: none;
      border-radius: 12px;
    }
  }
`;
