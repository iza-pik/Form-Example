const validatePassword = (password) => {
  const containsNumber = Boolean(password.match(/\d/));
  const containsLowerCase = Boolean(password.match(/[a-z]/));
  const containsUpperCase = Boolean(password.match(/[A-Z]/));
  const charRequirements =
    containsNumber && containsLowerCase && containsUpperCase;
  return password.length > 9 && charRequirements;
};

export default validatePassword;
