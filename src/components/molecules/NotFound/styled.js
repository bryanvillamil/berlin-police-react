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
    font-size: 25px;
    margin: 0;
  }
  svg {
    font-size: 50px;
    margin-top: 20px;
    color: #ce1717;
  }
  ${up("sm")} {
    h2 {
      font-size: 30px;
    }
  }
  ${up("md")} {
    h2 {
      font-size: 36px;
    }
    svg {
      font-size: 60px;
    }
  }
`;