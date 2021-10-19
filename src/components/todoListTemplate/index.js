import React from "react";
import Header from "../todoListHeader";
import TodoListItem from "../todoListItem";
import * as S from "./styles";
import { data } from "../../lib/export/data"

export default function TodoListTemplate() {
  console.log(data)
  return (
    <>
      <S.MainDiv>
        <Header/>
        {data.map((item) => (
          <TodoListItem 
            contents={item.contents}
            checked={item.checked}
            key={item.id}
          />
        ))}
      </S.MainDiv>
    </>
  );
}
