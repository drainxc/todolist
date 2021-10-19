import React from "react";
import * as S from "./styles";

export default function TodoListItem() {
  return (
    <S.List>
      <span>
        <span className="bullet">•</span>
        <span className="contents">ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴ</span>
      </span>
      <input type="checkbox" />
    </S.List>
  );
}
