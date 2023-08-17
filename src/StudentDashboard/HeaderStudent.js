import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function HeaderStudent() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/" style={{ color: "green", marginLeft: 20, fontWeight: "bold", display: "flex", flexDirection:"row" }}>Wins Academy  <span style={{ color: "red", marginLeft: "10px"}} >student </span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/student/resources">Resources</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/student/my-profile">profile</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/student/important-messages">Important Messages</Link>
                            </li>

                            <li class="nav-item" style={{ marginLeft:"693px", color:"green"}}>
                                <a class="nav-link" style={{ color:"green", fontWeight: "bold", }} href="/logout">Student</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderStudent;