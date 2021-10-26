import styled from "styled-components";

export const buttonRotate = styled.div`
  overflow: hidden;
  transition: all 0.5s ease-out;
  ${() => `transform: translateX(-100px)`};
  ${({ rotate }) => rotate && `transform: rotate(-585deg)`};
  border: black 1px solid;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: 1000;
  border-radius: 30px;
  background: white;
  display: flex;
  justify-content: center;
`;
