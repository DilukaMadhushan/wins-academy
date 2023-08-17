import React, { useEffect, useState } from 'react'
import '../loginstyle.css';
import axios from 'axios';

export default function LoginAdmin() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")

    const retrieveInstructors = async()=>{
        const data = {
            email:email,
            password: password
        }
        await axios.post("http://localhost:8070/students-login?email=" + email + "&password=" + password, ).then(res =>{
          if(res.data.students[0]){
            localStorage.setItem("isloggedin", res.data.students[0]._id )
            localStorage.setItem("isstudent", "student" )
            window.location.reload()
          }else{
            seterror("email or password incorrect")
          }
        });
      }

    const loginadmin = async() => {
        await retrieveInstructors()
        if (email === "dilukamadu@gmail.com" && password === "123456") {
            localStorage.setItem("isloggedin", "admin")
            localStorage.setItem("isstudent", "admin" )
            window.location.reload()
        } else {
            seterror("email or password is incorrect")
        }


    }
    useEffect(() => {
      if(localStorage.getItem("isloggedin") !== null){
        //console.log(localStorage.getItem("isloggedin"))
        if( localStorage.getItem("isloggedin") === "admin" ){
            window.location.href = "/dashboard"
        }else{
            window.location.href = "/student/resources"
        }
        
      }
    }, [])
    
    return (
        <section class="body">
            <div class="container">
                <div class="login-box">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="logo">
                                <span class="logo-font">Wins</span>Academy
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">

                            <h3 class="header-title">LOGIN</h3>
                            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                            <form class="login-form">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Email or UserName" value={email} onChange={(e) => setemail(e.currentTarget.value)} />
                                </div>
                                <div class="form-group">
                                    <input type="Password" class="form-control" placeholder="Password" value={password} onChange={(e) => setpassword(e.currentTarget.value)} />

                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-block" onClick={(e) => {e.preventDefault(); loginadmin()}}>LOGIN</button>
                                </div>

                            </form>
                        </div>
                        <div class="col-sm-6 hide-on-mobile">
                            <div id="demo" class="carousel slide" data-ride="carousel">
                                <ul class="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                </ul>

                                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </a>
                                <a class="carousel-control-next" href="#demo" data-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
