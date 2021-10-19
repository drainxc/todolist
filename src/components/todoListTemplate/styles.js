import styled from "styled-components";

export const MainDiv = styled.div`
  background-color: white;
  width: 400px;
  height: 550px;
  display: flex;
  border-radius: 6px;
  box-shadow: 0 0 4px #ffffff, 0 0 7px #ffffff, 0 0 20px #e8b4ff;

  header {
    width: 100%;
    padding: 20px;

    .day {
      color: gray;
    }

    .title {
      margin-top: 5px;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      font-size: 30px;
      font-weight: 1000;
    }
  }

  hr {
    position: absolute;
    margin-top: 90px;
    width: 400px;
    height: 1px;
    border: none;
    background-color: whitesmoke;
  }
`;
