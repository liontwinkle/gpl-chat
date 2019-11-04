import { authActionNames } from '.';

export const authActions = {
  userLoggedIn: ({ user, token }) => ({
    type: authActionNames.USER_LOGGED_IN,
    payload: { user, token },
  }),

  registerUser: ({ email, password, name }) => ({
    type: authActionNames.REGISTER_USER,
    payload: { email, password, name },
  }),
  registerUserSuccess: () => ({ type: authActionNames.REGISTER_USER_SUCCESS }),
  registerUserError: errors => ({
    type: authActionNames.REGISTER_USER_ERROR,
    payload: errors,
  }),

  logInUser: ({ email, password }) => ({
    type: authActionNames.LOG_IN_USER,
    payload: { email, password },
  }),
  logInUserSuccess: () => ({ type: authActionNames.LOG_IN_USER_SUCCESS }),
  logInUserError: errors => ({
    type: authActionNames.LOG_IN_USER_ERROR,
    payload: errors,
  }),
};
