import React, { Component } from 'react';
import axios from 'axios';

export default class ReferencesStudent extends Component{
  constructor(props){
    super(props);

    this.state={
        references:[]
    };

  }
  componentDidMount(){
    this.retrieveResources();
  }

  retrieveResources(){
    axios.get("http://localhost:8070/references").then(res =>{
      if(res.data.success){
        this.setState({
            references:res.data.existingReferences
        });
      
        console.log(this.state.references)
      }
  
      
    });
  }

  onDelete = (id) =>{
    axios.delete(`http://localhost:8070/reference/delete/${id}`).then((res) =>{
      alert("Delete Successfully");
      this.retrieveResources();
    });
  }

  filterData(references,searchKey){
    const result = references.filter((instructor) =>
    instructor.firstname.toLowerCase().includes(searchKey)||
    instructor.lastname.toLowerCase().includes(searchKey)
    )
    this.setState({references:result})
  }

  handleSearchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("http://localhost:8070/references").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingReferences, searchKey)
  
      }
    })
  }

render() {
  return(
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4 className='header-name'>All Resources</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}></input>
          </div>
        </div>
        &nbsp;
        &nbsp;
        
        
        <table className="table table-hover" style={{marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">Resource Name</th>
              <th scope="col">Resource URL</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.references.map((references,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{references.subject}</td>
                <td>{references.referenceName}</td>
                <td> <a href={references.url}> Open url </a> </td>
              </tr>
            ))}
          </tbody>
        </table>
        
    </div>
  )
}
}