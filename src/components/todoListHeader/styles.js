import styled from "styled-components";

// export const a = styled.div`
//   padding: 5px;
// `;

// export const b = styled(a)``


export const HeaderDiv = styled.div`
  width: 100%;
  padding: 5.6% 0;
  .day {
    color: gray;
    padding: 0 5%;
  }
  .top {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    span {
      /* padding: 0 2.5%; */
      font-size: 30px;
      font-weight: 1000;
    }
    button {
      border: 0px;
      background-color: white;
      img {
        margin-top: 7px;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Hr = styled.hr`
  position: absolute;
  width: 400px;
  height: 1px;
  margin-top: 90px;
  border: none;
  background-color: whitesmoke;
`;
