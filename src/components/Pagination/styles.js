import styled from "@emotion/styled";

export const Button = styled.button`
  border: none;
  font-size: 3rem;
  outline: none;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background: #f44336;
  box-shadow: #b71c1c 0.2rem 0.2rem 0.1rem;
  color: #b71c1c;
  font-weight: bold;
  cursor: pointer;
  margin: 0 1rem;
  &:active {
    box-shadow: none;
    position: relative;
    top: 0.2rem;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  border-radius: 0.3rem;
  border: 0.3rem solid #2d2d2d;
  background: transparent;
  font-family: "Press Start 2P", cursive;
  padding: 0.8rem 0 0.8rem 0.8rem;
  margin: 0 0.8rem;
  @media only screen and (max-width: 56.25em) {
    margin: 1rem 0.8rem;
  }
`;

export const Lines = styled.div`
  margin-top: 1.2rem;
  float: right;
  @media only screen and (max-width: 56.25em) {
    margin-top: 2rem;
  }
`;

export const Line = styled.div`
  height: 0.5rem;
  width: 10rem;
  background: #2d2d2d;
  margin-bottom: 0.5rem;
`;

export const Controls = styled.div`
  font-size: 1.4rem;
  user-select: none;
  margin: 0 6rem;
`;
