import React, { Component } from "react";
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
 

export class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.createProject(this.state);
  };

  render() {
    const { title, content } = this.state;
    return (
      <div className="container project-detail">
        <div className="card  border-secondary shadow bg-white rounded mb-3">
          <h3 className="card-header">New Plans </h3>
          <div className="card-body">
            <form
              onSubmit={this.handleSubmit}
            >
              
              <div className="form-group">
                <input
                  type="title"
                  name="title"
                  required
                  value={title}
                  className="form-control"
                  id="exampleInputtitle1"
                  aria-describedby="titleHelp"
                  placeholder="✒     Title Here"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  name="content"
                  value={content}
                  minLength="6"
                  required
                  className="form-control"
                  id="exampleInputcontent1"
                  rows="5"
                  placeholder="📃     content"
                  onChange={this.handleChange}
                >
                </textarea>
              </div>
              <button type="submit" className="btn btn-primary  btn-block mb-4">
                Submit
              </button>
            </form>

            <hr />
            <div>Posted By Dante</div>
            <div>2nd September,2am</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
      createProject:(project)=>dispatch(createProject(project))
  }
}

export default connect(null,mapDispatchToProps)(CreateProject);
