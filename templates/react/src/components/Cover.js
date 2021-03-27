import styled from "styled-components";

const Cover = styled.div`
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  width: 500px;
  height: 300px;
`;

export default Cover;
