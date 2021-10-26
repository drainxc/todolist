import React, { useState } from "react";
import * as S from "./style"

export default function AddBtn () {
    const [rotate, setRotate] = useState(false);

    function handleClick() {
      setRotate(!rotate);
    }
    return (
      <S.buttonRotate rotate={rotate} onClick={handleClick}>
        +
      </S.buttonRotate>
    );
}