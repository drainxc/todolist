import React, { useState } from "react";
import * as S from "./styles";

export default function TodoListItem({ contents, checked, key }) {
  return (
    <S.List>
        <span className="bullet">•</span>
        <div className="contents">{contents}
        <div className="label">{contents}</div>
        </div>
      <input type="checkbox" defaultChecked={checked}/>
    </S.List>
  );
}
