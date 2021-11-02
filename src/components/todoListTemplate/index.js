import React, { useState, useRef } from "react";
import Header from "../todoListHeader";
import * as S from "./styles";
import AddBtn from "./addBtn";
import List from "./List";

export default function TodoListTemplate() {
  const [text, setText] = useState("");
  const [datum, setDatum] = useState([]);
  const [opacity, setOpacity] = useState(true);
  const [input, setInput] = useState(false);
  const itemInput = useRef();
  function textOnkeyup(e) {
    setText(e.target.value);
    if (text === "" && e.target.value === " ") {
      setText("");
    }
  }

  function keyPressEvent(e) {
    if (e.key === "Enter" && text !== "" && input) {
      const data = {
        id: nextId.current,
        contents: text,
        checked: false,
      };
      console.log(datum);
      setDatum([...datum, data]);
      setText("");
      nextId.current += 1;
    }
  }

  const onRemove = (id) => {
    setDatum(datum.filter((data) => data.id !== id));
  };

  function handleClick() {
    setOpacity(!opacity);
    if (opacity) {
      itemInput.current.style = "opacity: 1;";
    } else {
      itemInput.current.style = "opacity: 0;";
    }
    setText("");
    setInput(!input);
  }

  const nextId = useRef(1);

  return (
    <>
      <S.MainDiv>
        <Header />
        <span className="list">
          <List datum={datum} onRemove={onRemove} />
        </span>
      </S.MainDiv>
      <S.Add>
        <input
          maxLength="30"
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
