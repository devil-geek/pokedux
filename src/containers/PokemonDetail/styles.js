import styled from "@emotion/styled";

export const ScreenDetail = styled.div`
  background: #1d2225;
  margin: 3rem 4rem;
  border-radius: 3rem;
  height: 50vh;
  overflow: hidden;
  box-shadow: inset 0 0 0.6rem #2d2d2d;
  @media only screen and (max-width: 56.25em) {
    overflow-y: auto;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center; /* align horizontal */
  align-items: center;
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    height: auto;
  }
`;

export const DetailImg = styled.div`
  flex: 1;
  padding: 2rem;
  img {
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 56.25em) {
    img {
      width: 200px;
    }
  }
`;

export const DetailInfo = styled.div`
  flex-basis: 45%;
  padding: 1.5rem;
  margin: 1.2rem;
  border-radius: 0.5rem;
  background: #32383c;
  color: whitesmoke;
  font-weight: normal;
  line-height: 1.65;
  display: flex;
  align-self: stretch;
  font-size: 1.4rem;
  span {
    color: #8bc34a;
  }
  .name {
    text-transform: capitalize;
  }
`;
