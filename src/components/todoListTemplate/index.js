import React from "react";
import Header from "../todoListHeader";
import TodoListItem from "../todoListItem";
import * as S from "./styles";

export default function TodoListTemplate() {
  return (
    <>
      <S.MainDiv>
        <Header/>
        <TodoListItem/>
      </S.MainDiv>
    </>
  );
}
