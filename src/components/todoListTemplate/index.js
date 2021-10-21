import React, { useState, useRef } from "react";
import Header from "../todoListHeader";
import TodoListItem from "../todoListItem";
import * as S from "./styles";
import { data } from "../../lib/export/data";

export default function TodoListTemplate() {
  return (
    <>
      <S.MainDiv>
        <Header />
        <div className="list">
          {data.map((item) => (
            <TodoListItem
              contents={item.contents}
              checked={item.checked}
              key={item.id}
            />
          ))}
        </div>
      </S.MainDiv>
      <S.AddButton>
        <input placeholder="할 일을 입력하세요." />
        <button className="itemAdd">+</button>
      </S.AddButton>
    </>
  );
}
