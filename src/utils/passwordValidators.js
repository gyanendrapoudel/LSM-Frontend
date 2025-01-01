export  const passwordValidators = (password='', confirmPassword='') => {
  // must be 6 characters
  // must contain 1 number
  // must contain one Capital Letter
  // must contain one Small Letter
  // must contain one Special Letter
  // Password do not match
  const errors = []
  !/["A-Z"]/.test(password) && errors.push('must contain one Capital Letter')
  !/["a-z"]/.test(password) && errors.push(' must contain one Small Letter')
  !/[0-9]/.test(password) && errors.push(' must contain one  number')
  !/["!@#$%&*{}?,.()<>/|"]/.test(password) &&
    errors.push('must contain one of these !@#$%&*{}?,.()<>/| characters ')
    password.length < 6 && errors.push(' must be 6 characters')
    password !== confirmPassword && errors.push('Password do not match')
  return errors
}
