import React, { Component } from "react";
import { connect } from "react-redux";
import { getProject } from "../../store/actions/projectActions";



export class ProjectDetails extends Component {

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.getProject(id);
  }

  render() {
    const {project} = this.props;
    if(project){
      return (
      <div className="container project-detail">
        <div className="  border-secondary shadow bg-white rounded mb-3">
          <h3 className="card-header"> {project.title} </h3>
          <div className="card-body">
            <p className="card-text">
              {project.content}
            </p>
          </div>
          <div className="card-body">
            <hr />
            <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
            <div>2nd September ,2am</div>
          </div>
        </div>
      </div>
    );
  }else{
    return <div className="container center">
        Loading Project..
    </div>
  }
}
}
const mapStateToProps = (state, ownProps) => {
  return {
    project: state.project.project
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProject: projectId => dispatch(getProject(projectId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
