import React, { Component } from "react";
// * 2) import connect from react-reduc
import { connect } from "react-redux";
// * 1) import action from projectAction
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    //   [e.target.id] gets element of id
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(this.state);
    this.props.createProject(this.state);
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-draken-3">Create New Project</h5>
          <div className="input-field">
            <i className="material-icons prefix">subtitles</i>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">create</i>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="row">
            <div className="input-field col s12 center-align">
              <button className="btn waves-effect waves-light">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

// * 4 create a mapDisplatchToProps
const mapDisplatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

// * 3) connect, connect component to redux store
// *) 5) pass mapDisplatchToProps to connect... If we do not have mapstateto props then we can pass null as the first parameters
export default connect(mapStateToProps, mapDisplatchToProps)(CreateProject);
