import React from "react";
import ReactToPrint from "react-to-print";
import axios from 'axios';




class ComponentToPrint extends React.Component {



    constructor(props){
        super(props);
        this.state = {
            feedback : []
        }
    }
    componentDidMount(){
        this.getFeedback();
    }

    getFeedback(){

        axios.get("http://localhost:8070/feedback/printview").then(Response=>{

              if(Response.data.success){

                this.setState({
                    feedback:Response.data.existingPosts
                });
                console.log(this.state.feedback)
              }

        });

    }

    filterData(feedback,searchKey){

        const result = feedback.filter((feedback)=>
           
             feedback.section.toLowerCase().includes(searchKey)
        )
        this.setState({feedback:result})
       }
       
       handleSearchArea =(e) =>{
    
        const searchKey = e.currentTarget.value;
    
        axios.get("http://localhost:8070/feedback/printview")
            .then(Response =>{
                if(Response.data.success){
                this.filterData(Response.data.existingPosts,searchKey)
                }
                
            });
    
       }
        
    
 
  
    

  render() {
    return(
        <div className="container">
        <div>
            <br/>

            <h1 className='header-name' style={{marginTop:20}}>All received  Feedback  details On all sections in Institute</h1><br/>

            <input type="search" className="myInputprint" style={{marginRight:500}}
                placeholder="Search for the feedbacks according to sections...." 
                title="Type in a name"
                onChange={this.handleSearchArea}
                /><br/><br/>



                 <table className="table" >
                 <thead  className="table-dark">
                     <tr>
        
                         <th scope="col">Name</th>
                         <th scope="col">Section</th>
                         <th scope="col">Date</th>
                         <th scope="col">Message</th>
                         <th scope="col">Experience</th>
                         <th scope="col">Support</th>
                         <th scope="col">Satisfication</th>
                         
  
                     </tr>
                  </thead>
                     {this.state.feedback.map(feedback=>(

                 
                 <tbody>
                           <tr>
                               <td>{feedback.sname}</td>
                               <td> {feedback.section}</td>
                               <td>{feedback.fdate}</td>
                               <td>{feedback.review}</td>
                               <td>{feedback.experience}</td>
                               <td>{feedback.support}</td>
                               <td>{feedback.satisfication}</td>
                               
                           </tr>
                     
  
                     
                 </tbody>
                     ))}
             </table>

             <br></br><br></br> 
             <hr></hr>
             <br></br><br></br>

             <h4 style={{color:"red"}}>Total Number of Received Feedbacks : {this.state.feedback.length}</h4>
             
     </div> 

     <br></br>
     <br></br>
     <hr></hr>
     <br></br>



</div>
 );
  }
}

class ExampleFeedback extends React.Component {
  render() {
    return (
      <div>
          <h1 style={{marginTop:50,fontSize:30,marginLeft:100,color:"#eb7134"}}> Click Here To Download The Report ! </h1>
          

        <ReactToPrint
          trigger={() => <button  className= "btn btn-warning" style={{marginLeft:100,marginTop:0 ,paddingLeft:30,paddingRight:30,fontSize:20 }}> Download  The Report </button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default ExampleFeedback;
