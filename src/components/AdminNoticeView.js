import react,{useState, Component} from 'react';
import axios from 'axios';




export default class ViewAdmin extends Component{
    
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

    onDelete =(id) =>{
         axios.delete(`http://localhost:8070/notice/feeddelete/${id}`).then((res)=>{
             alert("Delete Succesfully!");
             this.componentDidMount();
         })
    }



    filterData(notice,searchKey){

        const result = notice.filter((notice)=>
           
             notice.uploader.toLowerCase().includes(searchKey)
        )
        this.setState({notice:result})
       }
       
       handleSearchArea =(e) =>{
    
        const searchKey = e.currentTarget.value;
    
        axios.get("http://localhost:8070/notice/feedAdminview")
            .then(Response =>{
                if(Response.data.success){
                this.filterData(Response.data.existingPosts,searchKey)
                }
                
            });
    
       }
    

    //Notices Viewing 
    
    render(){
        return(
            <div  style={{backgroundImage:"url(http://localhost:3000/imagesnotices/plain.jpg)"
           ,
           backgroundSize:'cover',
           backgroundposition:'center',
           position:'center',
           backgroundAttachment:'fixed',
           paddingBottom:50
           
           }}>

          <h1 className='header-name' style={{textAlign:"center", marginBottom:30,paddingTop:23,fontSize:60}}><b>NOTICES</b></h1><br/><br></br>

          <input type="search" className="myInput"
                            placeholder="Search for the Notices according to uploader...." 
                            title="Type in a name" style={{marginTop:2}}
                            onChange={this.handleSearchArea}
                            /><br/><br/>

               <div className="container32">
                   <br/>

                   

                   
                    {this.state.notice.map(notice=>(

                            <div  className="shadow-sm p-3 mb-5 bg-body rounded">
                            <div class="alert alert-success" style={{backgroundColor:"#ECF0F1"}}>
                            <h4 class="alert-heading"><b>{notice.title}</b></h4>
                            <p style={{color:"black"}}> {notice.notice}</p>
                            <p>By:</p>
                                    <span style={{color:"red"}}>{notice.uploader}   </span><br></br>
                                    <span  style={{color:"red"}}>   {notice.date}</span>
                                    
                            <hr></hr>

                            <button  className="btn btn-danger" style={{ color:'white'}}>  <a  onClick={() =>this.onDelete(notice._id)}>DELETE</a></button>
                            <button className="btn btn-success" style={{marginLeft:10}}><a style={{color:'white'}} href={`/dashboard/feedupdate/${notice._id}`} >UPDATE</a></button>
                            
                            </div>
                            </div>
                     
                    ))}
            </div> 

            <div  style={{marginTop:50,marginLeft:450,fontSize:35,fontWeight:2,color:'white',backgroundColor:'#044F67',marginRight:500,padding:10}}>
               <b> Click The Button To Upload a New Notice : </b>
               <button className="btn btn-success" style={{marginLeft:40 ,padding:5}}><a  style={{color:'white'}} class="caption-helper btn btn-round" href={`/dashboard/feedadd`} > <b>UPLOAD A NEW NOTICE</b> </a></button>
            </div>
    </div>
        );
        
    }
}
