import styled from "styled-components";

export const UserForm = styled.div`
  font-size: 2.5vmin;
  display: flex;
  flex-direction: column;
  label {
    position: relative;
    margin: 5px 0;
    display: block;
    padding: 10px;
  }
  input {
    height: 2.5vmin;
    margin-left: 2.5vmin;
  }
  .errorMsg {
    position: absolute;
    top: -15px;
    right: 25%;
    color: darkred;
    font-size: 1.5vmin;
  }
`;
