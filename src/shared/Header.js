import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/" style={{ color: "green", marginLeft: 20, fontWeight: "bold" }}>Wins Academy <span style={{color:"red"}}> Admin </span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="">Home</a>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Students
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/dashboard/students">Students</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/students-register">Add Student</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/students-requests">Student Requests</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/reportgenerate-student">Student Report generate</Link></li>

                                </ul>
                            </li>




                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Instructor
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/dashboard/instructors">All Instructors</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/request">All Requests</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/instructor-register">Sign-up</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/reportgenerate">Instructor Report Generate</Link></li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Lecturers
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/dashboard/lecturers">Lecturers</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/lecturer-register">Add Lecturers</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/lecturer-requests">Lecturer Requests</Link></li>
                                    <li><Link class="dropdown-item" to="/dashboard/reportgenerate-lecture">Lecturer Report generate</Link></li>

                                </ul>
                            </li>



                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Notices
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/dashboard/feedview">Notices</a></li>
                                    <li><a class="dropdown-item" href="/dashboard/feedAdminview">Admin Notices</a></li>
                                    <li><a class="dropdown-item" href="/dashboard/feedadd"> Notices add</a></li>


                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/dashboard/resources">resources</a></li>
                                    <li><a class="dropdown-item" href="/dashboard/create-resources">create resource</a></li>


                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Subject</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/dashboard/instant-messages">Instant Messages</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Assessments
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="">Quiz</a></li>
                                    <li><a class="dropdown-item" href="/dashboard/i/quiz">View Quiz(I)</a></li>
                                    <li><a class="dropdown-item" href="/dashboard/i/quiz">View Quiz(S)</a></li>
                                    <li><a class="dropdown-item" href="/dashboard#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/dashboard#">Assignment</a></li>
                                    <li><a class="dropdown-item" href="/dashboard/i/assignment">View Assignments(I)</a></li>
                                    <li><a class="dropdown-item" href="/dashboard#">Assignment</a></li>
                                </ul>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/dashboard#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    FeedBack
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/dashboard/fbadd">Feedback form</a></li>

                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/dashboard/fbview">Feedback View </a></li>

                                    <li><a class="dropdown-item" href="/dashboard/view">Contactus View</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/logout">logout</a>
                            </li>

                            <li class="nav-item" style={{ marginLeft:"104px", color:"red"}}>
                                <a class="nav-link" href="/logout">Admin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;