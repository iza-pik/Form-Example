import {
  CHANGE_USER_DETAILS,
  CHANGE_PRIVACY_DETAILS,
  DISPLAY_USER_ERROR,
  SUBMIT_USER_DETAILS,
  SUBMIT_PRIVACY_DETAILS,
} from "../constants";

export const changeUserDetails = (id, value) => ({
  type: CHANGE_USER_DETAILS,
  payload: { id, value },
});

export const displayUserError = (error) => ({
  type: DISPLAY_USER_ERROR,
  payload: { error },
});

export const submitUserDetails = (boolean) => ({
  type: SUBMIT_USER_DETAILS,
  payload: { boolean },
});
export const changePrivacyDetails = (id, boolean) => ({
  type: CHANGE_PRIVACY_DETAILS,
  payload: { id, boolean },
});

export const submitPrivacyDetails = (boolean) => ({
  type: SUBMIT_PRIVACY_DETAILS,
  payload: { boolean },
});
