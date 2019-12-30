export const createProject = project => {
  // * dispatch, dispatch an action to reducers
  return (dispatch, getState) => {
    // make async call to databse
    dispatch({
      type: "CREATE_PROJECT",
      project
    });
  };
};
