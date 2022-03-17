import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin: 10px auto 30px;
  max-width: 850px;
  border-radius: 5px;
  .react-datepicker {
    &-wrapper {
      width: 48%;
      display: flex;
    }
    &__input-container {
      height: 100%;
      width: 100%;
      input {
        width: 100%;
      }
    }
  }

  input {
    height: 50px;
    border-radius: 4px;
    border: 1px solid #777;
    padding: 10px;
  }
  ${up("md")} {
    justify-content: space-around;
    padding: 30px 25px;
    background: #3498db;
    align-items: center;
    .react-datepicker {
      &-wrapper {
        width: 150px;
      }
    }
    input {
      height: 40px;
    }
  }
  ${up("lg")} {
    max-width: 991px;
    .react-datepicker {
      &-wrapper {
        width: 200px;
      }
    }
  }
`;

export const Search = styled.input`
  width: 100%;
  margin-bottom: 15px;
  ${up("md")} {
    width: auto;
    margin-bottom: 0;
  }
`;

export const SelectCity = styled.select`
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #777;
  cursor: pointer;
  margin-bottom: 15px;
  ${up("md")} {
    width: auto;
    height: 40px;
    margin-bottom: 0;
  }
`;

export const Submit = styled.button`
  background: #3498db;
  border: none;
  border-radius: 4px;
  padding: 15px 20px;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
  font-weight: 800;
  margin: 15px auto 0;
  width: 100%;
  height: 50px;
  &:hover {
    transform: scale(1.1);
  }
  ${up("md")} {
    background: #111;
    padding: 8px 20px;
    width: auto;
    margin: 0;
    height: 40px;
  }
`;
