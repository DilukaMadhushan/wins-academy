import react,{useState, Component} from 'react';
import axios from 'axios';

export default class NoticeUpload extends Component{

    constructor(props){
        super(props);
        this.state={
            title:"",
            notice:"",
            uploader:"",
            date:"",
            titleError:"",
            noticeError:"",
            uploaderError:"",
            dateError:""
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

      let titleError="";
      let noticeError="";
      let uploaderError="";
      let dateError="";

      if(!this.state.title){
        titleError = 'Please Fill the Title field '
      }

      if(!this.state.notice){
        noticeError = 'Please Fill the Notice Filed'
      }

      if(!this.state.uploader){
        uploaderError = 'Please Enter the uploader name'
      }

      if(!this.state.date){
        dateError = 'Please Fill the date filed'
      }

      if(titleError||noticeError||uploaderError||dateError){
        this.setState({titleError,noticeError,uploaderError,dateError});
        return false;
      }
      
      return true;

    };


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

        const{title,notice,uploader,date} = this.state;

        const data ={
            title:title,
            notice:notice,
            uploader:uploader,
            date:date
        }

        if(isValid){
        console.log(data)

        axios.post("http://localhost:8070/notice/feedadd",data).then((res)=>{

            alert("succesfully Notices were uploaded.");
              

                   
                     this.setState(
                         {
                            title:"",
                            notice:"",
                            uploader:"",
                            date:"" ,
                            titleError:"",
                            noticeError:"",
                            uploaderError:"",
                            dateError:"" 
                         }
                     )
                 

        }).catch((err)=>{

          alert("Please Fill all the fields");
        })
      }
    }

    render(){

        return(

          <div  style={{backgroundImage:"url(http://localhost:3000/imagesnotices/last1.jpg)"
    ,backgroundSize:'cover',
    height:'1000px'
    }}>
            
            
          <h1 className="titleC header-name" style={{marginLeft:300}}>  To Upload The Notices...   </h1>
                                <div className="row">
                                  <div class="col-md-23">
                                    <div>
                                              <div class="mb-3">
                                              <label for="title" class="form-label"><b>Title of the Notice  :</b></label>
                                                <input type="text" class="form-control" id="title" name="title" placeholder="Enter the Title "
                                               
                                                 value={this.state.title}
                                                 onChange={this.handleInputChange}
                                                 required />

                                                    <div style={{fontSize:12 ,color:"red"}}>
                                                        {this.state.titleError}
                                                    </div>
                                              </div>


                                              <div class="mb-3">
                                              <label for="notice " class="form-label"><b>Enter the Notice :</b></label>
                                              <textarea class="form-control" id="notice" name="notice" placeholder="Enter the Notice" rows="5"  
                                              value={this.state.notice}
                                              onChange={this.handleInputChange}
                                              required ></textarea>

                                                    <div style={{fontSize:12 ,color:"red"}}>
                                                        {this.state.noticeError}
                                                    </div>

                                            </div>

                                              <div class="mb-3">
                                              <label for="uploader" class="form-label"><b> Uploader Name : :</b></label>
                                                <input type="text" class="form-control" id="uploader" name="uploader" placeholder="Uploader name "
                                                
                                                 value={this.state.uploader}
                                                 onChange={this.handleInputChange}
                                                 required />

                                                    <div style={{fontSize:12 ,color:"red"}}>
                                                        {this.state.uploaderError}
                                                    </div>


                                              </div>

                                              <div class="mb-3">
                                              <label for="date" class="form-label"><b>Enter the Date :</b></label>
                                                <input type="date" class="form-control" id="date" name ="date" placeholder="YY/MM/DD" 
                                               
                                                value={this.state.date}
                                                min={this.disablePastDate()}
                                                max={this.disablePastDate()}
                                                onChange={this.handleInputChange}
                                                required />

                                                    <div style={{fontSize:12 ,color:"red"}}>
                                                        {this.state.dateError}
                                                    </div>
                                              </div>

                                             

                                            <div class="mb-3">
                                            <button type="button" class="btn btn-success"  onClick={this.onSubmit}> UPLOAD </button>
                                            </div>

                                          

                                    </div>
                                  </div>

                                  <div class="col-md-29" style={{marginLeft:10}}>
                                    <div   class="alert alert-success">

                                      <h5> Instructions : </h5><br></br>

                                      <p>1. Fill the form inputting notice </p>
                                      <p>2. click upload button</p>
                                      <p>3.check whether notice is succesfully upload .clicking view button</p> 

                                      <p>When You Uploading the notice please Put all Informations Correctly . It will easy for students. As well as 
                                        ,if you want to edit or delete some notice . You want only to click delete and update butons . If you wand to see the current notices 
                                        click the following "view Notices " Button.Clicking that you can reach for update and delete buttons also.</p>
                                        <br></br>
                                        <hr></hr>
                                        <br></br>

                                        <button className="btn btn-primary" ><a style={{color:"white"}} href={`/dashboard/feedAdminview`}>View Notices </a></button>
                                      
                                    
                              </div>
                              </div>
                              </div>
                              </div>
                              

        )}
}
