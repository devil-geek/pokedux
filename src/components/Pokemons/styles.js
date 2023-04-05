import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  visibility: ${(props) => (props.loading === "true" ? "hidden" : "visible")};
  grid-template-columns: repeat(auto-fill, minmax(12.8rem, 1fr));
  grid-auto-rows: 1fr;
  font-size: 1.1rem;
  padding: 1.5rem 1rem;

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
  padding: 1rem;
  margin: 0.2rem;
  border-radius: 0.5rem;
  background: #32383c;
  text-align: center;
  cursor: pointer;
  font-family: "Press Start 2P", cursive;
  font-size: 1.05rem;
  border: none;
  img {
    width: 100%;
    margin: 0 auto;
  }
  p {
    color: #fff;
    margin: 1.8rem 0 0;
  }
`;
