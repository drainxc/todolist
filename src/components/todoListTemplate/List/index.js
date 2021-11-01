import React from "react";
import binImg from "../../../asset/bin.png";
import fixImg from "../../../asset/pen.png";
import * as S from "./style";
import TodoListItem from "../../todoListItem";

function List({ data, onRemove }) {
  return (
    <>
      <span className="item">
        <TodoListItem
          contents={data.contents}
          checked={data.checked}
          key={data.id}
        />
        <img className="fix" src={fixImg} alt="" />
        <S.Button>
          <img onClick={() => onRemove(data.id)} src={binImg} alt="" />
        </S.Button>
      </span>
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
