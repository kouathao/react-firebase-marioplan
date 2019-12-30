export const createProject = project => {
  // * dispatch, dispatch an action to reducers
  // ? then add them with extra argument here
  return (dispatch, getState, { getFirestore }) => {
    // make async call to databse

    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Koua",
        authorLastName: "Thao",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};
