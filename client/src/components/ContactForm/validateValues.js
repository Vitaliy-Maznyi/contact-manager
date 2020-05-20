export const validateValues = (values) => {
  const errors = {}
  if (!values.firstName) { errors.firstName = 'Please put the first name' }
  if (!values.phoneNumber) { errors.phoneNumber = 'Please put the phone number' }
  return errors
}
