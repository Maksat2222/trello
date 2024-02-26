import React from "react";
import styled from "styled-components";

const Cardkist = ({ card }) => {
  return (
    <div>
      {card.map((item) => {
        console.log(card);
        return (
          <Styleddiv>
            <h1>{item.cardtitle}</h1>
          </Styleddiv>
        );
      })}
    </div>
  );
};
const Styleddiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export default Cardkist;
