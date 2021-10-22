import styled from "styled-components";

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

export const AddButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  & .itemAdd {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 50px;
    font-weight: 300;
    border-radius: 24px;
    background: white;
  }
`;
