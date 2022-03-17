import styled from "styled-components";
import { up } from "styled-breakpoints";

export const ContentPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${up("md")} {
  }
`;

export const ButtonPag = styled.button`
    background: #3498db;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    font-weight: 800;
    margin: 0;
    width: 70px;
    height: 50px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0;
    svg {
        font-size: 20px;
        path {
            stroke: #fff;
        }
    }
    &:after {
        content: '';
        background: #111;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: all 0.5s ease-in-out;
    }
    &.prev {
        &:after {
            left: 100%;
        }
    }
    &.next {
        &:after {
            right: 100%;
        }
    }
    &:hover {
        &.prev {
            &:after {
                left: 0;
            }
        }
        &.next {
            &:after {
                right: 0;
            }
        }
    }
    &[disabled]{
        cursor: default;
        background: #bbb;
        &:after {
            content: none;
        }
    }
    ${up("md")} {
        justify-content: space-around;
        font-size: 14px;
        width: 120px;
        height: 40px;
    }
`;

export const SpanPage = styled.span`
    margin: 0 25px;
    border: 1px solid #333;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 5px;
    font-weight: 800;
    ${up("md")} {
        padding: 8px 20px;
        margin: 0 15px;
    }
`;
