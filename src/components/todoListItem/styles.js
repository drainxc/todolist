import styled from "styled-components";

export const List = styled.div`
  padding: 5% 0 5% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
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
  .contents .label {
    visibility: hidden;
    background: whitesmoke;
    width: 200px;
    color: black;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    left: 15%;
    bottom: 5%;
    z-index: 1;
    word-break: break-all;
  }
  .contents:hover .label {
    visibility: visible;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
  & img {
    width: 15px;
    height: 15px;
  }
`;
