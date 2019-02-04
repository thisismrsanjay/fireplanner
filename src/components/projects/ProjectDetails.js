import React from "react";
import {connect} from 'react-redux';

const ProjectDetails=(props)=> {
    const id = props.match.params.id;
    
  return (
    <div className="container project-detail">
      <div className="  border-secondary shadow bg-white rounded mb-3">
        <h3 className="card-header">Project Title - {id} </h3>
        <div className="card-body">
          
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime architecto, veritatis minus veniam voluptatem velit. Ea quae itaque impedit! Tempore cum sint adipisci atque libero explicabo, veritatis maiores eaque?</p>
        </div>
        <div className="card-body">
        <hr/>
          <div>Posted By Dante</div>
          <div>2nd September,2am</div>
          
        </div>
      </div>
    </div>
  );
}
const mapStateToProps={
  
}

export default connect(mapStateToProps)(ProjectDetails);