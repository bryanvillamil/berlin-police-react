import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Box = styled.div`
  display: flex;
  width: 100%;
  padding: 25px;
  border-radius: 5px;
  border: 1px solid;
  margin-bottom: 20px;
  ${up("md")} {
  }
`;

export const BoxImg = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
  }
  svg {
    font-size: 90px;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  align-content: flex-start;
  h2 {
    width: 100%;
    margin: 0;
    color: #3498db;
  }
  p {
    width: 100%;
  }
`;
