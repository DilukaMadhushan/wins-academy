import react,{useState, Component} from 'react';
import axios from 'axios';

export default class InsertContactus extends Component{

    constructor(props){
        super(props);
        this.state={
         
         name: "",
         email:"",
         phone : "",
         question: "",
         nameError:"",
         emailError:"",
         phonenumberError:"",
         questionError:""

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

      let nameError="";
      let emailError="";
      let phonenumberError="";
      let questionError="";

      if(!this.state.name){
        nameError = 'Please Fill the name field '
      }

    
     var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!this.state.email.match(email)){
        emailError='Please Fill the Valid Email';
    }

      var phone= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(!this.state.phone.match(phone)){
          phonenumberError='Phone Number is Required and Fill Correct Number format';
      }

      if(!this.state.question){
        questionError= 'Please Fill the question field'
      }

      if(emailError||nameError||phonenumberError||questionError){
        this.setState({emailError,nameError,phonenumberError,questionError});
        return false;
      }
      
      return true;

    };


    onSubmit = (e) =>{

        e.preventDefault();

        const isValid = this.validate();

        const{name,email,phone,question} = this.state;

        const data ={

            name: name,
            email:email,
            phone : phone,
            question: question
            
        }

        if(isValid){
        console.log(data)

        axios.post("http://localhost:8070/contactus/add",data).then((res)=>{

            alert("succesfully Your Questions  was Inserted!!");
                /* if(res.data.success){*/

                   
                     this.setState(
                         {
                            name: "",
                            email:"",
                            phone : "",
                            question: "",
                            nameError: "",
                            emailError:"",
                            phonenumberError:"",
                            questionError:""
                         }
                     )
                /* }*/

        })
      }
    }

    render(){

        return(
         
          //Stylings for background

           <div  style={{backgroundImage:"url(http://localhost:3000/imagesnotices/contactus3.jpg)"

               ,backgroundSize:'cover',
                 height:'1000px'
          }}>
            
            
         <h1 className="titleC header-name">  GET TOUCH WITH US ...   </h1><br></br>

          <div  className="container">

          <div className="row">
            <div class="col-md-3" style={{backgroundColor:"#ff9b00",borderRadius:10,padding:30,marginBottom:20}}>
              <div class="contact-info">
                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                <h2>Contact Us</h2>
                <h4>We are for you ... Come and Get knowledge  !</h4><br></br>

                <h4 style={{marginTop:70}}>E-Mail- wisdom@gmail.com </h4><br></br>
              </div>
            </div>

            <div class="col-md-9" style={{backgroundColor:"#fff",borderRadius:10,padding:30,marginBottom:20}}>
              <div class="contact-form2">

                <div class="form-group">
                  <label class= "lable-Contct" for="name"> Name: </label>
                  <div class="col-sm-10">          
                  <input type="text" class="form-control"   name="name"   placeholder="Please enter your name " 
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   required />


                  <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.nameError}
                   </div>

                  </div>
                </div>

                <div class="form-group">
                  <label class="lable-Contct" for="email">Email :</label>
                  <div class="col-sm-10">          
                  <input type="email" class="form-control"  name="email"  
                   placeholder="Please enter your  Valid E-Mail " 
                   value={this.state.email}
                   onChange={this.handleInputChange}
                   required/>

                    <div style={{fontSize:12 ,color:"red"}}>       
                           {this.state.emailError}
                    </div>

                  </div>
                </div>

                <div>
                  <label class="lable-Contct"  for="phone">Phone  Number :</label>
                  <div class="col-sm-10">
                  <input type="text" class="form-control"  name="phone" 
                   placeholder="Please enter your Current Phone Number "  
                   value={this.state.phone} 
                   onChange={this.handleInputChange} 
                   required/> 

                    <div style={{fontSize:12 ,color:"red"}}>       
                           {this.state.phonenumberError}
                    </div>

                  </div>
                </div>

                <div>
                  <label class="lable-Contct" >Question :</label>
                  <div class="col-sm-10">
                  <textarea class="form-control" rows="10" id="question" name="question" 
                   placeholder="You are feel free to ask Anything " 
                   value={this.state.question}
                   onChange={this.handleInputChange}
                   required></textarea>

                    <div style={{fontSize:12 ,color:"red"}}>       
                           {this.state.questionError}
                    </div>

                  </div>
                </div>

                <div class="form-group">        
                  <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default" onClick={this.onSubmit}>Submit</button>
                  </div>
                </div>

              </div>

              
            </div>
          </div>
        </div>

        <div>
                    <button class="btn btn-success" onClick={(e)=>{
                      this.setState({
                        name: "Hiruni Samarawickrama",
                        email:"hiruni@gmail.com",
                        phone : "0775656567",
                        question: "can i know the payment process",
                       
                            
                      })
                    }}>

                      Demo Button
                    </button>
        </div>
        </div>
           
          
        )
        
        
        }
    }
