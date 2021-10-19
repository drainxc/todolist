import React from "react";
import * as S from "./styles";

export default function TodoListItem({ contents, checked, key }) {
  return (
    <S.List>
      <span>
        <span className="bullet">•</span>
        <span className="contents">{contents}</span>
      </span>
      <input type="checkbox" checked={checked} />
    </S.List>
  );
}
