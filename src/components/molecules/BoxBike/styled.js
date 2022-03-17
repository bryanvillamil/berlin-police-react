import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 25px;
  border-radius: 5px;
  border: 1px solid;
  box-shadow: inset 0px 0px 20px 8px #e0dada;
  margin-bottom: 20px;
  ${up("md")} {
  }
`;

export const BoxImg = styled.div`
  height: 180px;
  min-width: 180px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;
  width: 100%;
  margin-top: 20px;
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
  ${up("md")} {
    order: 1;
    width: initial;
    margin-top: 0;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  align-content: flex-start;
  order: 1;
  width: 100%;
  h2 {
    width: 100%;
    margin: 0;
    color: #3498db;
  }
  ${up("md")} {
    order: 2;
    width: initial;
  }
`;

export const Description = styled.p`
  width: 100%;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

export const BoxInfoDate = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  color: #3498db;
  span {
    margin-left: 5px;
    font-weight: 700;
    font-size: 12px;
    color: #000;
    margin-top: 4px;
  }
`;
