import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Cardkist from "./Cardkist";
import { addcard } from "../../store/thunks-slices/todoslice";
import Form from "./Form";

const Todolist = () => {
  const list = useSelector((state) => state.todos.list);

  return (
    <Stylediv>
      {list.map((charter) => {
        return (
          <div className="Stylediv2">
            <div className="divh1">
              {" "}
              <p key={charter.id}>{charter.title}</p>
            </div>
            <Cardkist id={charter.id} {...charter} />
            <Form {...charter} />
          </div>
        );
      })}
    </Stylediv>
  );
};
const Stylediv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  .Stylediv2 {
    width: 200px;

    overflow: scroll;
    background-color: #547b7b;
    padding: 20px;
    border: solid 2px #547b7b;
    border-radius: 20px;
    margin: 20px;
  }

  h1 {
    font-size: 30px;
    margin: 5px;
    color: black;
    color: white;
  }
`;
export default Todolist;
