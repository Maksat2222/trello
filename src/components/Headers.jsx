import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import trellologo from "../assets/png/pngwing.com.png";
import { FaBell } from "react-icons/fa";
import { RxQuestionMarkCircled } from "react-icons/rx";
import styled from "styled-components";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";

const Headers = () => {
  return (
    <Styledheader>
      <div>
        <AppsIcon className="large"></AppsIcon>
        <img src={trellologo} alt="" />
        <h3>TRELLO</h3>
        <select value="рабочие пространства">
          <option value="рабочие пространства">рабочие пространства</option>
        </select>
        <select>
          <option>недавние</option>
        </select>
        <select>
          <option>в избраном</option>
        </select>
        <select>
          <option>шаблоны</option>
        </select>

        <button>создать</button>
      </div>
      <div>
        <HiOutlineMagnifyingGlass className="svg" />
        <input type="text" placeholder="поиск" />
        <div className="iconconyainer">
          {" "}
          <FaBell />
          <RxQuestionMarkCircled />
          <div className="div"></div>
          <FaRegUserCircle />
        </div>
      </div>
    </Styledheader>
  );
};
const Styledheader = styled("header")`
  .large {
    font-size: 40px;
  }
  .iconconyainer {
    margin-top: 15px;
  }
  .svg {
    position: relative;
    left: 40px;
    color: gray;
    top: 17px;
    margin: 0;
  }
  .div {
    width: 17px;
    position: relative;
    bottom: 3px;
    left: 2px;
    height: 17px;
    border-radius: 16px;
    background-color: white;
    background: rgb(246, 243, 242);
    background: linear-gradient(
      90deg,
      rgba(246, 243, 242, 1) 50%,
      rgba(20, 19, 19, 1) 50%
    );
  }
  svg {
    margin-top: 2px;
    font-size: large;
    margin-left: 5px;
  }
  width: 100%;
  height: 60px;
  background-color: #3a3737;
  color: white;
  display: flex;
  justify-content: space-between;
  h3 {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 13px;
  }

  div {
    display: flex;
    margin: 5px;
  }
  select {
    border: solid 1px #3a3737;
    height: 40px;
    background-color: #3a3737;
    color: white;
    margin-top: 3px;
    margin-right: 3px;
  }
  img {
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 8px;
    margin-left: 10px;
    margin-top: 5px;
  }

  button {
    height: 40px;
    border: black solid 1px;
    padding: 10px;
    padding-top: 10px;
    background-color: #645d5d;
    border-radius: 5px;
    margin-left: 10px;
    margin-top: 5px;
  }
  input {
    width: 170px;
    padding: 10px;
    height: 20px;
    border-radius: 10px;
    border: #3a3737 solid 5px;
    padding-left: 39px;

    background-color: #a49b9b;
    color: white;
    ::placeholder {
      color: white;
    }
  }
`;
export default Headers;
