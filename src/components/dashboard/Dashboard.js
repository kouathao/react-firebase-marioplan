import React, { Component } from "react";

// components
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

// connect redux to react
import { connect } from "react-redux";

// use this as a HOC to connect this component with firestore
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // ! 4) Access props data from react-redux store
    // ! 5) Destructor state
    const { projects, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {/*  ! 6) Pass down props to child components */}
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

// ! 2) Create map state to prop
const mapStateToProps = state => {
  // console.log(state);
  return {
    // 1) state, 2) project can be find in root reducers 3) then projects is in project Reducers
    // load data from firestore
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

// ! 1) add HOC connect and wrap around component
// ! 3) then add mapstatetoprops as a parameters to connect
// * connect two HOC by using the compose
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
      orderBy: ["createdAt", "desc"]
    },
    {
      collection: "notifications",
      limit: 3,
      orderBy: ["time", "desc"]
    }
  ])
)(Dashboard);
