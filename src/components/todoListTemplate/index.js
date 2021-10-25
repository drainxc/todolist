import React, { useState, useRef } from "react";
import Header from "../todoListHeader";
import TodoListItem from "../todoListItem";
import * as S from "./styles";
import fixImg from "../../asset/pen.png";
import binImg from "../../asset/bin.png";

export default function TodoListTemplate() {
  const [text, setText] = useState("");
  const [datum, setDatum] = useState([]);

  const Addbtn = () => {
    const [rotate, setRotate] = useState(false);
    const [move, setMove] = useState(false);

    function handleClick() {
      setRotate((prevState) => !prevState);
      setMove((prevState) => !prevState);
    }
    return (
      <S.buttonRotate rotate={rotate} move={move} onClick={handleClick}>
        +
      </S.buttonRotate>
    );
  };

  function textOnkeyup(e) {
    setText(e.target.value);
  }

  function keyPressEvent(e) {
    if (text !== "") {
      if (e.key === "Enter") {
        const data = {
          id: nextId.current,
          contents: text,
          checked: false,
        };
        console.log(data);
        setDatum([...datum, data]);
        setText("");
        nextId.current += 1;
      }
    }
  }

  const nextId = useRef(1);

  return (
    <>
      <S.MainDiv>
        <Header />
        <div className="list">
          {datum.map((item) => (
            <>
              <span className="item">
                <TodoListItem
                  contents={item.contents}
                  checked={item.checked}
                  key={item.id}
                />
                <img className="fix" src={fixImg} alt="" />
                <img className="delete" src={binImg} alt="" />
              </span>
            </>
          ))}
        </div>
      </S.MainDiv>
      <S.Add>
        <textarea
          value={text}
          onChange={textOnkeyup}
          onKeyPress={keyPressEvent}
          placeholder="할 일을 입력하세요."
        />
        <Addbtn />
      </S.Add>
    </>
  );
}
