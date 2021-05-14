import React from "react";
import { connect } from "react-redux";

const Done = ({ userCompleted, privacyCompleted }) => {
  return (
    <div>
      Please verify your email address, you should have received an email from
      us already!
    </div>
  );
};

const mapStateToProps = (state) => ({
  userCompleted: state.user.completed,
  privacyCompleted: state.privacy.completed,
});

export default connect(mapStateToProps, null)(Done);
