import React from "react";
import { useState } from "react/cjs/react.development";
import * as S from "./styles";

export default function TodoListItem({ contents, checked, fix, setFix }) {
  const [text, setText] = useState(contents)

  function textOnkeyup(e) {
    setText(e.target.value);
  }

  function keyPressEvent(e) {
    if (e.key === "Enter") {
      setFix(false);
    }
  }

  return (
    <S.List>
        <span className="bullet">•</span>
        {fix ? <input value={text} onKeyPress={keyPressEvent} onChange={textOnkeyup}/> : 
        <span className="contents">{text}
        <div className="tooltip">{text}</div>
        </span>}
      <input type="checkbox" defaultChecked={checked}/>
    </S.List>
  );
}
