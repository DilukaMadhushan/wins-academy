import react,{ Component} from 'react';


import axios from 'axios';

export default class Feedbackform extends Component{

    constructor(props){
        super(props);
        this.state={

        sname:"",
        section:"",
        review:"",
        fdate:"",
        experience:"",
        support:"",
        satisfication:"",
        snameError:"",
        sectionError:"",
        fdateError:"",
        reviewError:"",
        experienceError:"",
        supportError:"",
        satisficationError:""
        }
    }


    
  
    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({

            ...this.state,
            [name]:value
        })
    }

    
    validate = () =>{

      let snameError="";
      let sectionError="";
      let fdateError="";
      let reviewError="";
      let experienceError="";
      let  supportError="";
      let  satisficationError="";
      
      

      if(!this.state.sname){
        snameError = 'Please Fill the name field '
      }

      if(!this.state.section){
        sectionError = 'Please select the Sectiom'
      }

      if(!this.state.review){
        reviewError = 'Please Kindly Request a Review'
      }

      if(!this.state.fdate){
        fdateError = 'Please select the date '
      }
      if(!this.state.experience){
        experienceError = 'Please Choose '
      }
      if(!this.state.support){
        supportError = 'Please Choose '
      }
      if(!this.state.satisfication){
        satisficationError = 'Please Choose '
      }

      if(snameError||sectionError||fdateError||reviewError||experienceError||supportError||satisficationError){
        this.setState({snameError,sectionError,fdateError,reviewError,experienceError,supportError,satisficationError});
        return false;
      }
      
      return true;

    };


    //getting only current date

    disablePastDate = () => {
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyy = today.getFullYear();
      return yyyy + "-" + mm + "-" + dd;
  };



    onSubmit = (e) =>{

        e.preventDefault();

        const isValid = this.validate();

        const{sname,section,review,fdate,experience,support,satisfication} = this.state;

        const data ={
           
        sname:sname,
        section: section,
        review:review,
        fdate:fdate,
        experience:experience,
        support:support,
        satisfication:satisfication
           
        }

        if(isValid){
        console.log(data)

        axios.post("http://localhost:8070/feedback/fbadd",data).then((res)=>{

            alert("succesfully Feedback  was received,Thank You!");
                /* if(res.data.success){*/

                   
                     this.setState(
                         {
                            sname:"",
                            section:"",
                            review:"",
                            fdate:"",
                            experience:"",
                            support:"",
                            satisfication:"",
                            snameError:"",
                            sectionError:"",
                            fdateError:"",
                            reviewError:"",
                            experienceError:"",
                            supportError:"",
                            satisficationError:""
                         }
                     )
                 /*}*/

        })
      }
    }

    render(){
      
        
  return (
      
    <div  style={{backgroundImage:"url(http://localhost:3000/imagesnotices/star.jpg)"
    ,backgroundSize:'cover',
    height:'1300px'
    }}>

     <div className="container" >
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div className="shadow p-3 mb-5 bg-body rounded" >
            
            <h1 className='header-name'>Student  Feedback  Form</h1><br></br>

          <div>
         <div class="mb-3">
                <label class="form-label"> <b>Enter the Student Name : * </b></label>
                <input type="text" class="form-control"  name="sname"
                 placeholder="Enter the name " 
                 value={this.state.sname}
                 onChange={this.handleInputChange} 
                  required/>

                  
                 <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.snameError}
                   </div>

                </div>
                  <br></br>

                <div class="mb-3">
                <label class="form-label"><b>Type Of the Feedback : *</b> </label>
                        <select class="form-select"  name="section"
                         placeholder="Enter the name " 
                         value={this.state.section}
                         onChange={this.handleInputChange}
                         required >


                        <option>select sectionn as subject / other matter</option>
                        <option>Mathematics</option>
                        <option>Science</option>
                        <option>Physics </option>
                        <option>Chemistry </option>
                        <option>Other Matters  </option>
                        </select>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.sectionError}
                         </div>
                </div>

                   <br></br>
                 
                <div>
                <label  class="form-label"><b>Feedback review/Enquiry : * </b> </label> 
                <textarea class="form-control" placeholder="Leave a comment here"  name="review"
                value={this.state.review}
                onChange={this.handleInputChange}
                required></textarea>

                  <div style={{fontSize:12 ,color:"red"}}>    
                           {this.state.reviewError}
                   </div>
                </div>

                 <br></br>

                <div class="mb-3">
                <label  class="form-label"><b>Enter the Date : *</b></label>
                <input type="date" class="form-control"  name="fdate" id="fdate" 
                placeholder="YY/MM/DD " 
                value={this.state.fdate}
                min={this.disablePastDate()}
                max={this.disablePastDate()}
                onChange={this.handleInputChange}
                required />

                
                  <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.fdateError}
                   </div>
                </div>
                <br></br>


                <div class="mb-3">
                <label  class="form-label"> <b>How abut the Experience of the Institute Management: *</b></label>
                        <select class="form-select"  name="experience"
                         placeholder="Enter the name " 
                         value={this.state.experience}
                         onChange={this.handleInputChange}
                         required>

                        <option >choose</option>
                        <option>Good</option>
                        <option>Bad</option>
                        <option>Very Good</option>
                        <option> Best </option>
                        </select>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.experienceError}
                   </div>
                </div>
                 <br></br>


                <div class="mb-3">
                <label class="form-label"> <b>How is the Support from the Institute Of Instructors  : *</b></label>
                        <select class="form-select"  name="support" 
                         value={this.state.support}
                         onChange={this.handleInputChange}
                         required>

                        <option >choose</option>
                        <option>Good</option>
                        <option>Bad</option>
                        <option>Very Good</option>
                        <option> Best </option>
                        </select>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.supportError}
                   </div>
                </div>

                 <br></br>

                <div class="mb-3">
                <label  class="form-label"><b> Overall Satisfication :* </b></label>
                        <select class="form-select" name="satisfication" 
                        placeholder="Enter the name " 
                        value={this.state.satisfication}
                        onChange={this.handleInputChange}
                        required>

                        <option  selected>choose</option>
                        <option >satisfied</option>
                        <option >Very satisfied</option>
                        <option >Not Satisfied</option>
                        </select>

                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.satisficationError}
                   </div>
                </div>

                 <div style={{marginTop:50, marginLeft:500}}>
                        
                 <button  class="btn btn-success" type="submit"  onClick={this.onSubmit}>Send Feedback</button>

                 </div>
                   <br></br>
          
        </div>


    </div>
    </div>
    </div>
)
   
  }
}