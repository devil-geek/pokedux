import styled from "@emotion/styled";

export const ScreenDetail = styled.div`
  background: #1d2225;
  margin: 30px 40px 50px;
  border-radius: 30px;
  height: 50vh;
  overflow: hidden;
  box-shadow: inset 0 0 6px #2d2d2d;
`;

export const DetailContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center; /* align horizontal */
  align-items: center;
`;

export const DetailImg = styled.div`
  flex: 1;
  padding: 20px;
  img {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const DetailInfo = styled.div`
  flex: 1;
  padding: 15px;
  margin: 12px;
  border-radius: 5px;
  background: #32383c;
  color: whitesmoke;
  font-weight: normal;
  line-height: 1.65;
  display: flex;
  align-self: stretch;
  font-size: 14px;
  span {
    color: #8bc34a;
  }
  .name {
    text-transform: capitalize;
  }
`;
