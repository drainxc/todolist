import React, { useState, useRef } from "react";
import Header from "../todoListHeader";
import TodoListItem from "../todoListItem";
import * as S from "./styles";
import fixImg from "../../asset/pen.png";
import binImg from "../../asset/bin.png";
import AddBtn from "./addBtn";

export default function TodoListTemplate() {
  const [text, setText] = useState("");
  const [datum, setDatum] = useState([]);
  const [opacity, setOpacity] = useState(true);
  const itemInput = useRef();
  function textOnkeyup(e) {
    setText(e.target.value);
  }

  function keyPressEvent(e) {
    setText(e.target.value);
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

  function handleClick() {
    setOpacity(!opacity)
    if (opacity) {
      itemInput.current.style = "opacity: 1;";
    }
    else {
      itemInput.current.style = "opacity: 0;";
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
        <textarea maxLength="30"
          type="text"
          value={text}
          onChange={textOnkeyup}
          onKeyPress={keyPressEvent}
          placeholder="할 일을 입력하세요."
          ref={itemInput}
        />
        <div onClick={handleClick}>
          <AddBtn />
        </div>
      </S.Add>
    </>
  );
}
