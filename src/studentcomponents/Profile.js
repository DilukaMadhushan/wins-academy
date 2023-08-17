import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Profile() {
    const [profiledetails, setprofiledetails] = useState({})

    const getDetails = () =>{
        let userid =  localStorage.getItem("isloggedin" )
        console.log(userid)
        axios.get(`http://localhost:8070/students/${userid}`).then((res) =>{
            if(res.data.success) {
                setprofiledetails(
                    //res.data.
                    res.data.students
                )
            }
        });
    }

    console.log(profiledetails)

    useEffect(() => {
        getDetails()
    }, [])
    
    return (
        <section style={{backgroundColor: "#eee"}}>
            <div className="container py-5">
                
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                    className="rounded-circle img-fluid" style={{width: "150px"}} />
                                <h5 className="my-3">{profiledetails?.firstname} {profiledetails?.lastname}</h5>
                                <p className="text-muted mb-4">{profiledetails?.address}</p>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profiledetails?.firstname} {profiledetails?.lastname}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profiledetails?.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Date of birth</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profiledetails?.dob} </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Gender</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profiledetails?.gender} </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profiledetails?.phoneno} </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profiledetails?.address}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">NIC</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profiledetails?.nic}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Subject</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{profiledetails?.subject}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
