import styled from "@emotion/styled";

export const PokedexBody = styled.div`
  background-color: #f44336;
  min-height: calc(100vh - 3rem);
  max-width: 72rem; //96rem;
  margin: 1rem auto;
  border-radius: 1rem;
  box-shadow: #b71c1c 0.5rem 0.5rem 0.1rem;
`;

export const PokedexScreen = styled.div`
  background: #e0e0e0;
  margin: 2rem 4rem;
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
  border-bottom-right-radius: 0.2rem;
  padding-bottom: 2rem;
  height: calc(65vh - 2rem);
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 7rem 100%, 0 90%);
  @media only screen and (max-width: 56.25em) {
    height: calc(70vh - 2rem);
    margin: 2rem;
  }
`;
