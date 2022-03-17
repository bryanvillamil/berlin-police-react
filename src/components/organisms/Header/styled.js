import styled from "styled-components";
import { up } from "styled-breakpoints";

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  height: auto;
  position: relative;
  width: 100%;
  z-index: 99;
  background: #111;
  ${up("md")} {
    padding: 12px 20px;
  }
`;

export const HeaderLogo = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-end;
  order: 2;
  svg {
    font-size: 50px;
    fill: #3498db;
  }
  ${up("md")} {
    order: 1;
    justify-content: flex-start;
    svg {
      font-size: 65px;
    }
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  order: 1;
  h1 {
    color: #fff;
    font-size: 25px;
    margin: 0;
    span {
      text-transform: capitalize;
    }
  }
  ${up("md")} {
    order: 2;
    h1 {
      font-size: 40px;
    }
  }
`;
