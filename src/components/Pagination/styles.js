import styled from "@emotion/styled";

export const Button = styled.button`
  border: none;
  font-size: 30px;
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #f44336;
  box-shadow: #b71c1c 2px 2px 1px;
  color: #b71c1c;
  font-weight: bold;
  cursor: pointer;
  margin: 0 10px;
  &:active {
    box-shadow: none;
    position: relative;
    top: 2px;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  border: 3px solid #2d2d2d;
  background: transparent;
  font-family: "Press Start 2P", cursive;
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin: 0 0.5rem;
`;

export const Lines = styled.div`
  margin-top: 12px;
  float: right;
`;

export const Line = styled.div`
  height: 5px;
  width: 100px;
  background: #2d2d2d;
  margin-bottom: 5px;
`;

export const Controls = styled.div`
  font-size: 14px;
  user-select: none;
  margin: 0 60px;
`;
