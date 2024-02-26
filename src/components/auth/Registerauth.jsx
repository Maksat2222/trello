import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { UserSlice } from "../../store/thunks-slices/Registaishen";
import { registeruser } from "../../store/thunks-slices/registorthunks";
import { Link, useFormAction, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Registerauth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  function Handlersumbit(userData) {
    console.log(userData);
    console.log(user);
    dispatch(registeruser({ userData, navigate }));
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
    <RegisterContainer>
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
        />
        <button type="sumbit" disabled={loading}>
          регистрация
        </button>
        {error && <p>Error: {error}</p>}
        <h3>
          Вы уже зарагестрированы <Link to={"/login"}>войти</Link>
        </h3>
      </form>
    </RegisterContainer>
  );
};

export default Registerauth;
const RegisterContainer = styled("div")`
  width: 650px;
  display: flex;
  background-color: #f8f5f5;
  flex-direction: column;
  align-items: center;
  height: 40vh;
  margin: 0 auto;
  margin-top: 100px;
  padding-top: 50px;
  padding: 10px 0 20px;
  border-radius: 50px;
  color: black;
  h3 {
    color: black;
    margin: 0 auto;
  }
  a {
    color: blue;
  }
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
      color: black;
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
