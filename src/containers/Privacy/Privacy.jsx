import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  changePrivacyDetails,
  submitPrivacyDetails,
} from "../../store/actions";
import privacyInputs from "../../utils/privacyInputs";

import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button/Button";

const Privacy = ({
  privacyDetails,
  onChangePrivacyDetails,
  onSubmitPrivacyDetails,
}) => {
  const history = useHistory();

  const handleChange = (event) => {
    const { id, value } = event.target;
    onChangePrivacyDetails(id, value);
  };

  const submitPrivacyDetails = () => {
    onSubmitPrivacyDetails(true);
    history.push("/done");
  };

  return (
    <div>
      {privacyInputs.map((item) => (
        <Checkbox
          {...item}
          checked={privacyDetails[item.id]}
          onChange={handleChange}
          key={item.id}
        />
      ))}
      <Button type="submit" onClick={submitPrivacyDetails}>
        Submit
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onChangePrivacyDetails: (id, boolean) =>
    dispatch(changePrivacyDetails(id, boolean)),
  onSubmitPrivacyDetails: (boolean) => dispatch(submitPrivacyDetails(boolean)),
});

const mapStateToProps = (state) => ({
  privacyDetails: state.privacy,
});

export default connect(mapStateToProps, mapDispatchToProps)(Privacy);
