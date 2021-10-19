import React from "react";
import * as S from "./styles";
import search from "../../asset/search.png";

export default function TodoListTemplate() {
  return (
    <>
      <S.MainDiv>
        <header>
          <div className="day">Tuesday.oct 19</div>
          <span className="top">
            <span>To-Do list</span>
            <button>
              <img src={search} />
            </button>
          </span>
        </header>
        <hr />
      </S.MainDiv>
    </>
  );
}
