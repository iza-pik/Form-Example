import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 50px;
  border: 2px solid navy;
  border-radius: 8px;
  width: auto;
`;

export const NavBar = styled.div`
  padding: 20px;
  background-color: navy;

  a {
    position: relative;
    color: white;
    text-decoration: none;
    padding: 0 12%;
  }

  a.active {
    color: pink;
    background-color: gray;
  }
`;

export const Body = styled.div`
  padding: 30px;
`;
