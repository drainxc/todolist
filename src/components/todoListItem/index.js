import React from "react";
import * as S from "./styles";

export default function TodoListItem({ contents, checked, fix }) {
  return (
    <S.List>
        <span className="bullet">•</span>
        {fix ? <input value={contents} /> : 
        <span className="contents">{contents}
        <div className="tooltip">{contents}</div>
        </span>}
      <input type="checkbox" defaultChecked={checked}/>
    </S.List>
  );
}
