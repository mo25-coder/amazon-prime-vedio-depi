import { ChevronDownIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const StyledDropList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  margin-bottom: 20px;
  padding: 5px 15px;
  border-radius: ${(props) =>
    props.isClicked ? "8px 8px 0 0" : "var(--border-radius)"};
  background-color: ${(props) => props.bgColor || "#eeecec"};
  position: relative;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: #d4d4d4;
  }
  svg {
    transition: all 0.3s ease-in-out;
    transform: ${(props) =>
      props.isclicked === "true" ? "rotate(180deg)" : "none"};
    margin-left: 10px;
  }
`;
const UL = styled.ul`
  list-style: none;
  position: absolute;
  width: 100%;
  padding: 5px 0;
  margin: 0;
  background-color: #eeecec;
  display: ${(props) => (props.isclicked === "true" ? "flex" : "none")};
  flex-direction: column;
  gap: 5px;
  z-index: 100;
  top: 71%;
  left: 0;
  border-radius: 0 0 8px 8px;
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
    &:hover {
      background-color: #d4d4d4;
    }
    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: blue;
    }
  }
`;

function DropList({ bgColor, listItems }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Container>
      <StyledDropList
        bgColor={bgColor}
        isclicked={toString(isClicked)}
        onClick={() => setIsClicked((s) => !s)}
      >
        Content Type <ChevronDownIcon width={40} />
      </StyledDropList>
      <UL isclicked={toString(isClicked)}>
        {listItems.map((li) => {
          return (
            <li key={li}>
              <input type="checkbox" />
              <label>{li}</label>
            </li>
          );
        })}
      </UL>
    </Container>
  );
}

export default DropList;
