import React, { useRef, useState } from "react";
import * as S from "./style";

export default function AddBtn() {
  const [rotate, setRotate] = useState(false);
  const button = useRef();

  function handleClick() {
    setRotate(!rotate);
    if (rotate)
      button.current.style = `transform: translateX(-100px) rotate(0deg)`;
    else button.current.style = `transform: translateX(0px) rotate(-585deg)`;
  }

  return (
    <S.ButtonRotate ref={button} onClick={handleClick}>
      +
    </S.ButtonRotate>
  );
}
