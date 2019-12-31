// takes in two parameters
// ! when we don't have a state we pass in initial state

const initState = {
  authError: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login Error");
      return { ...state, authError: "Login failed" };
    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("SIGNED OUT SUCCESS");
      return state;
    default:
      return state;
  }
};

export default authReducer;
