import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Cardkist from "./Cardkist";
import { addcard } from "../../store/thunks-slices/todoslice";

const Form = ({ id }) => {
  const [cardtitle, setcardtitle] = useState("");
  const [statecard, setstatecard] = useState(false);
  const dispatch = useDispatch();


  function handlerlistbutton() {
    setstatecard(!statecard);
  }
  function handlertodo(parrenID) {
    setstatecard(!statecard);
    const todolist = {
      id: Date.now().toString(),
      cardtitle: cardtitle,
      parrentId: parrenID,
    };

    setcardtitle("")

    dispatch(addcard(todolist));
  }
  return (
    <div>
      {statecard ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={cardtitle}
            onChange={(e) => setcardtitle(e.target.value)}
          />
          <button onClick={() => handlertodo(id)}>add card</button>
        </form>
      ) : (
        <button onClick={handlerlistbutton}>добавить карточку</button>
      )}
    </div>
  );
};

export default Form;
