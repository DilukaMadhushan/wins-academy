import react,{useState, Component} from 'react';
import axios from 'axios';




export default class View extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            notice : []
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8070/notice/feedview")
        .then(Response =>{
            this.setState({notice:Response.data})
            console.log(Response)
        }).catch(function(err){
            console.log(err);
        })
      
        
    }

    /*onDelete =(id) =>{
         axios.delete(`http://localhost:8070/notice/feeddelete/${id}`).then((res)=>{
             alert("Dlete Succesfully");
             this.componentDidMount();
         })
    }*/
    

    //Notices Viewing 
    
    render(){
        return(
           <div  style={{backgroundImage:"url(http://localhost:3000/imagesnotices/plain.jpg)"
           , backgroundSize:'cover',
           backgroundposition:'center',
           position:'center',
           backgroundAttachment:'fixed',
           paddingBottom:50
           }}>

          <h1 className='header-name' style={{textAlign:"center", marginBottom:30,paddingTop:20,fontSize:60}}><b>NOTICES</b></h1><br/>
               <div className="container32">
                   <br/>

                   
                    {this.state.notice.map(notice=>(
                             
                             <div className="shadow p-3 mb-5 bg-body rounded">
                            <div class="alert alert-success" style={{backgroundColor:"#ECF0F1"}}>
                                
                            <h4 class="alert-heading"><b>{notice.title}</b></h4>
                            <p style={{color:"black"}}> {notice.notice}</p>
                            <p>By:</p>
                                    <span style={{color:"red"}}>{notice.uploader}   </span><br></br>
                                    <span style={{color:"red"}} >   {notice.date}</span>
                                    
                            <hr></hr>
                            
                            </div>
                            </div>
                     
                    ))}
    
            </div>
            <div>
                <div class="container1" style={{marginTop:50,marginBottom:50,marginLeft:800}}>
                        <img src="http://localhost:3000/imagesnotices/notice1.png" alt="img"  class="imagenotice"/>
                <div  className="overlay">
                <div style={{marginTop:30,marginLeft:30}}><h4 style={{color:"white"}} ><b>PUBLIC NOTICES !</b></h4><br></br><br></br><p style={{fontSize:20,color:""}}>If Any Kind Of Require <br></br><br></br>  You can Contact Through <br></br><br></br></p> <b>wisdom@gmail.com  </b> </div>
                 </div>
                </div>
            </div> 
    </div>
        );
        
    }
}
