import styled, { keyframes } from "styled-components";

export const MainDiv = styled.div`
  background-color: white;
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 0 4px #ffffff, 0 0 7px #ffffff, 0 0 20px #e8b4ff;
  .list {
    overflow-y: scroll;
  }

  .item {
    display: inline-flex;
    align-items: center;
  }

  & img {
    display: flex;
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

export const Add = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(150%, -50%);
  textarea {
    position: absolute;
    width: 150px;
    height: 15px;
    right: 50px;
    border: black 1px solid;
    resize: none;
    transition: all 0.5s ease-out;
    opacity: 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  textarea::-webkit-scrollbar {
    display: none;
}
  .plus {
    background-color: black;
  }
`;

export const buttonRotate = styled.div`
  overflow: hidden;
  transition: all 0.5s ease-out;
  ${() => `transform: translateX(-100px)`};
  ${({ rotate }) => rotate && `transform: rotate(-315deg)`};
  animation-fill-mode: forwards;
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
