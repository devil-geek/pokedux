import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  visibility: ${(props) => (props.loading === "true" ? "hidden" : "visible")};
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: 1fr;
  font-size: 0.7rem;
  padding: 15px 10px;

  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  button:first-of-type {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

export const Item = styled.button`
  padding: 10px;
  margin: 2px;
  border-radius: 5px;
  background: #32383c;
  text-align: center;
  cursor: pointer;
  font-family: "Press Start 2P", cursive;
  font-size: 0.65rem;
  border: none;
  img {
    width: 100%;
    margin: 0 auto;
  }
  p {
    color: #fff;
    margin: 18px 0 0;
  }
`;
