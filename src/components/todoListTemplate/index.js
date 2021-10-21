import React, { useState, useRef } from "react";
import Header from "../todoListHeader";
import TodoListItem from "../todoListItem";
import * as S from "./styles";

export default function TodoListTemplate() {
  const [text, setText] = useState("");
  const [datum, setDatum] = useState([]);

  function textOnkeyup(e) {
    setText(e.target.value);
  }

  const nextId = useRef(1);

  function onCreate() {
    const data = {
      id: nextId.current,
      contents: text,
      checked: false,
    }
    console.log(data)
    setDatum([...datum, data]);
    setText('');
    nextId.current += 1;
  }

  return (
    <>
      <S.MainDiv>
        <Header />
        <div className="list">
          {datum.map((item) => (
            <TodoListItem
              contents={item.contents}
              checked={item.checked}
              key={item.id}
            />
          ))}
        </div>
      </S.MainDiv>
      <S.AddButton>
        <input onChange={textOnkeyup} placeholder="할 일을 입력하세요." />
        <button className="itemAdd" onClick={onCreate}>
          +
        </button>
      </S.AddButton>
    </>
  );
}
