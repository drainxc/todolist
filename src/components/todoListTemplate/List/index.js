import React from "react";
import binImg from "../../../asset/bin.png";
import fixImg from "../../../asset/pen.png";
import * as S from "./style";
import TodoListItem from "../../todoListItem";

function DeleteBtn({ data, onRemove }) {
  console.log(data)
  return (
    <>
      <S.Button>
        <img onClick={() => onRemove(data.id)} src={binImg} alt="" />
      </S.Button>
    </>
  );
}

export default function List({ datum, onRemove }) {
  return (
    <>
      <div className="list">
        {datum.map((data) => (
          <>
            <span className="item">
              <TodoListItem
                contents={data.contents}
                checked={data.checked}
                key={data.id}
              />
              <img className="fix" src={fixImg} alt="" />
              <DeleteBtn data={data} key={data.id} onRemove={onRemove} />
            </span>
          </>
        ))}
      </div>
    </>
  );
}
