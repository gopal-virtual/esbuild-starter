import styled from "styled-components";

const Link = styled.a.attrs(() => ({ target: "_blank", rel: "noopener" }))`
  display: block;
  font-size: 1.2em;
  font-family: monospace;
  cursor: pointer;
  text-decoration: none;
  color: navy;
  &:before {
    content: "👉 ";
  }
`;

export default Link;
