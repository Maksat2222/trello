import React, { useState } from "react";
import styled from "styled-components";
import Todolist from "./Todolist";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/thunks-slices/todoslice";

const Mainpages = () => {
  const [title, settitle] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todos.list);
  const [statetodo, setstatetodo] = useState(false);
  const [statelist, setstatelist] = useState("true");
  function handlertodo() {
    setstatetodo(!statetodo);
  }
  function hadlertodo() {
    const nametodo = {
      title: title,
      id: Date.now().toString(),
      card: [],
    };
    setstatetodo(!statetodo);
    setstatelist(false);
    dispatch(addTodo(nametodo));
  }
  return (
    <Styledmain>
      <Todolist />
      {statetodo ? (
        <form onClick={(e) => e.preventDefault()}>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <button onClick={hadlertodo}>добавит список</button>
          <button onClick={() => setstatetodo(false)}>X</button>
        </form>
      ) : (
        <div className="menu">
          <button className="button23" onClick={handlertodo}>
            {list.length == 0 ? "добавит коллону" : "добавить еще одну колонну"}
          </button>
        </div>
      )}
    </Styledmain>
  );
};
const Styledmain = styled("main")`
  height: 100vh;
  background-color: #dccfcf;
  color: black;
  display: flex;

  .button23 {
    margin: 20px;
  }
  form{
    margin: 20px;
  }

  button {
    height: 40px;
    background-color: black;
    border-radius: 10px;
  }
  input {
    height: 40px;
    background-color: #f0eded;
    border-radius: 10px;
    color: white;
  }
  form {
    display: flex;
  }

  background-image: url("https://avatars.mds.yandex.net/i?id=f4aa80ce453e461f43498d75db302c473978b902-11908978-images-thumbs&n=13");
  input {
    color: black;
  }
`;

export default Mainpages;
