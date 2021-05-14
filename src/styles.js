import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-size: 2.5vmin;
  margin: 10vh 10vw;
  border: 2px solid navy;
  border-radius: 8px;
  width: auto;
`;

export const NavBar = styled.div`
  padding: 1vmin;
  background-color: navy;
  font-size: 2.5vmin;
  a {
    position: relative;
    color: white;
    text-decoration: none;
    padding: 0 12%;
  }
  a.active {
    font-weight: bold;
    color: black;
    background-color: lightblue;
  }
`;

export const Body = styled.div`
  padding: 3vmin;
`;
