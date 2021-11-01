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
  .tooltip {
    visibility: hidden;
    background-color: black;
    padding: 5px 10px;
    color: white;
    text-align: center;
    position: absolute;
    z-index: 2;
    left: 100px;
    font-size: 13px;
    bottom: 15px;
    justify-content: center;
  }
  .contents:hover .tooltip {
    visibility: visible;
  }
  .contents .tooltip::after {
    content: "";
    position: absolute;
    border-width: 10px;
    top: 0%;
    left: -10px;
    border-style: solid;
    border-color: transparent transparent black transparent;
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
