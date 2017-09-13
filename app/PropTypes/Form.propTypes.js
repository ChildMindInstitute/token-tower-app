import PropTypes from 'prop-types';

export default {
  asyncValidating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool // true if async validation is running
  ]),
  dirty: PropTypes.bool, // true if any values are different from initialValues
  error: PropTypes.any, // form-wide error from '_error' key in validation result
  warning: PropTypes.any, // form-wide warning from '_warning' key in validation result
  invalid: PropTypes.bool, // true if there are any validation errors
  initialized: PropTypes.bool, // true if the form has been initialized
  pristine: PropTypes.bool, // true if the values are the same as initialValues
  submitting: PropTypes.bool, // true if the form is in the process of being submitted
  submitFailed: PropTypes.bool, // true if the form was submitted and failed for any reason
  submitSucceeded: PropTypes.bool, // true if the form was successfully submitted
  valid: PropTypes.bool, // true if there are no validation errors
  // Actions:
  array: PropTypes.shape({
    insert: PropTypes.func, // function to insert a value into an array field
    move: PropTypes.func, // function to move a value within an array field
    pop: PropTypes.func, // function to pop a value off of an array field
    push: PropTypes.func, // function to push a value onto an array field
    remove: PropTypes.func, // function to remove a value from an array field
    removeAll: PropTypes.func, // function to remove all the values from an array field
    shift: PropTypes.func, // function to shift a value out of an array field
    splice: PropTypes.func, // function to splice a value into an array field
    swap: PropTypes.func, // function to swap values in an array field
    unshift: PropTypes.func.isRequired // function to unshift a value into an array field
  }),
  asyncValidate: PropTypes.func, // function to trigger async validation
  blur: PropTypes.func, // action to mark a field as blurred
  change: PropTypes.func, // action to change the value of a field
  destroy: PropTypes.func, // action to destroy the form's data in Redux
  dispatch: PropTypes.func, // the Redux dispatch action
  handleSubmit: PropTypes.func, // function to submit the form
  initialize: PropTypes.func, // action to initialize form data
  reset: PropTypes.func, // action to reset the form data to previously initialized values
  touch: PropTypes.func, // action to mark fields as touched
  untouch: PropTypes.func // action to mark fields as untouched
};
