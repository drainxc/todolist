import React, { useState, useRef } from "react";
import Header from "../todoListHeader";
import TodoListItem from "../todoListItem";
import * as S from "./styles";
import fixImg from "../../asset/pen.png";
import binImg from "../../asset/bin.png";

export default function TodoListTemplate() {
  const [text, setText] = useState("");
  const [datum, setDatum] = useState([]);

  function textOnkeyup(e) {
    setText(e.target.value);
  }

  const nextId = useRef(1);
  const deleteBtn = useRef();

  function onCreate() {
    if (text !== "") {
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

  function onDelete() {
  }

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
                <img
                  onClick={onDelete}
                  className="delete"
                  src={binImg}
                  alt=""
                  ref={deleteBtn}
                />
              </span>
            </>
          ))}
        </div>
      </S.MainDiv>
      <S.Add>
        <input
          value={text}
          onChange={textOnkeyup}
          placeholder="할 일을 입력하세요."
        />
        <button className="itemAdd" onClick={onCreate}>
          +
        </button>
      </S.Add>
    </>
  );
}
