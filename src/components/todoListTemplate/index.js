import React from "react";
import * as S from "./styles";
import search from "../../asset/search.png";

export default function TodoListTemplate() {
  return (
    <>
      <S.MainDiv>
        <header>
          <div className="day">Tuesday.oct 19</div>
          <span className="title">To-Do list</span>
        </header>
        <hr />
      </S.MainDiv>
    </>
  );
}
