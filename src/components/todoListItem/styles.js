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
    width: 280px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
    padding-top: 10px;
  }
  .contents .label {
    visibility: hidden;
    background: whitesmoke;
    color: black;
    text-align: center;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    bottom: 10%;
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
