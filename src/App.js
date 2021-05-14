import React from "react";
import { BrowserRouter, Switch, NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";

import User from "./containers/User/";
import Privacy from "./containers/Privacy/";
import Done from "./containers/Done";

import { Container, NavBar, Body } from "./styles";

export const App = () => {
  const handleClick = (event) => {
    console.log(event);
  };

  const navNavLinks = [
    {
      title: "User",
      path: "/user",
      id: "user",
    },
    {
      title: "Privacy",
      path: "/privacy",
      id: "privacy",
    },
    {
      title: "Done",
      path: "/done",
      id: "done",
    },
  ];

  return (
    <BrowserRouter>
      <Container>
        <NavBar>
          {navNavLinks.map((item) => (
            <NavLink to={item.path} onClick={handleClick}>
              {item.title}
            </NavLink>
          ))}
        </NavBar>
        <Body>
          <Switch>
            <Route exact path="/user">
              <User />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/done">
              <Done />
            </Route>
          </Switch>
        </Body>
      </Container>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  userState: state.user,
  privacyState: state.privacy,
});

export default connect(mapStateToProps, null)(App);
