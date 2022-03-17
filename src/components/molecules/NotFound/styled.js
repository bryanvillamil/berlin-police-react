import styled from "styled-components";
import { up } from "styled-breakpoints";

export const ContentNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35vh;
  h2 {
    font-size: 45px;
    margin: 0;
  }
  svg {
    font-size: 70px;
    margin-top: 20px;
    color: #ce1717;
  }
  ${up("md")} {
  }
`;