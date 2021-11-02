import React from "react";
import binImg from "../../../asset/bin.png";
import fixImg from "../../../asset/pen.png";
import * as S from "./style";
import TodoListItem from "../../todoListItem";
import { useState } from "react/cjs/react.development";

function List({ data, onRemove }) {
  const [fix, setFix] = useState(false);
  function onFix() {
    setFix(true);
  }

  return (
    <>
      <S.ListDiv>
        <span className="item">
          <TodoListItem data={data} fix={fix} setFix={setFix} />
          <img src={fixImg} alt="" onClick={onFix} />
          <img onClick={() => onRemove(data.id)} src={binImg} alt="" />
        </span>
      </S.ListDiv>
    </>
  );
}

export default function itemList({ datum, onRemove }) {
  return (
    <>
      {datum.map((data) => (
        <List data={data} key={data.id} onRemove={onRemove} />
      ))}
    </>
  );
}
