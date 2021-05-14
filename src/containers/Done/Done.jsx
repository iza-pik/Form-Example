import React from "react";
import { connect } from "react-redux";
import { Message } from "./styles";

const Done = ({ userCompleted, privacyCompleted }) => {
  return userCompleted && privacyCompleted ? (
    <Message>
      <h1>Done!</h1>
      <p>
        Please verify your email address, you should have received an email from
        us already!
      </p>
    </Message>
  ) : (
    "Please fill in the form."
  );
};

const mapStateToProps = (state) => ({
  userCompleted: state.user.completed,
  privacyCompleted: state.privacy.completed,
});

export default connect(mapStateToProps, null)(Done);
