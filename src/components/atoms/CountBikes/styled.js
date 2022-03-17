import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Count = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  ${up("md")} {
    flex-wrap: nowrap;
  }
`;

export const CountTitle = styled.h2`
  display: flex;
  margin: 0;
`;
