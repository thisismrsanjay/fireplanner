import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import {getProjects} from '../../store/actions/projectActions';


class DashBoard extends Component {
 

  componentDidMount(){
    this.props.getProjects();
  }

  render() {
    const { project } = this.props;
    return (
      <div>
        <div className="dashboard container">
          <div className="row">
            <div className="col-8 border-info">
              <ProjectList projects={project} />
            </div>
            <div className="col-4 border-primary">
              <Notification />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    project: state.project.projects
  };
};

const mapDispatchToProps =(dispatch)=>{
  return{
      getProjects:()=>dispatch(getProjects())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);
