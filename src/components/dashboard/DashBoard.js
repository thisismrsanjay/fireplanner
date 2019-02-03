import React, { Component } from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
  return {
    projects:state.project.projects
  }
}

 class DashBoard extends Component {
  render() {
    const {projects} = this.props;
    return (
      <div>
        <div className="dashboard container">
            <div className="row">
               <div className="col-8 border-info">
                <ProjectList projects={projects}/>
               </div>
               <div className="col-4 border-primary">
                <Notification/>
               </div> 
            </div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps)(DashBoard);