import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { changeUserDetails, displayUserError } from "../../store/actions";
import userInputs from "../../utils/userInputs";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import { UserForm } from "./styles";

const User = ({
  userDetails,
  onChangeUserDetails,
  onSubmitUserDetails,
  onDisplayUserError,
}) => {
  const history = useHistory();

  const validatePassword = (password) => {
    const containsNumber = password.match(/\d+/g);
    const validLength = containsNumber && containsNumber.length > 1;
    if (password.length > 9 && validLength) {
      return true;
    }
    return false;
  };

  const submitUserDetails = (event) => {
    console.log("SUBMIT", userDetails);
    event.preventDefault();
    const isPasswordValid = validatePassword(userDetails.password);

    if (isPasswordValid) {
      onSubmitUserDetails(true);
      onDisplayUserError("");
      history.push("/privacy");
    } else {
      onDisplayUserError("Invalid password");
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    onChangeUserDetails(id, value);
  };

  return (
    <UserForm>
      <form onSubmit={(e) => submitUserDetails(e)}>
        {userInputs.map((item) => (
          <label htmlFor={item.id} key={item.title}>
            {item.title === "Password" && <div>{userDetails.error}</div>}
            {item.title}
            {item.required ? "*" : ""}
            <Input
              {...item}
              value={userDetails[item]}
              onChange={handleChange}
            />
          </label>
        ))}
        <Button type="submit" onSubmit={submitUserDetails}>
          Submit
        </Button>
      </form>
    </UserForm>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeUserDetails: (id, value) => dispatch(changeUserDetails(id, value)),
  onSubmitUserDetails: (boolean) => dispatch(changeUserDetails(boolean)),
  onDisplayUserError: (error) => dispatch(displayUserError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
