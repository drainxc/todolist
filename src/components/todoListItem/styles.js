import styled from "styled-components";

export const List = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  .bullet {
    font-size: 20px;
    margin-right: 10px;
  }
  .contents {
    display: inline-block;
    width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;
