import React, { Component } from 'react';
import axios from 'axios'

export default class CreateResouces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            referenceName: "",
            url: "",
            subject: "",
        }
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {

        e.preventDefault();

        const { referenceName, url, subject } = this.state;

        const data = {
            referenceName: referenceName,
            url: url,
            subject: subject,
        }

        axios.post("http://localhost:8070/reference/save", data).then((res) => {
            if (res.data.success) {
                this.setState(
                    {
                        referenceName: "",
                        url: "",
                        subject: "",
                    }
                )
            }
        })
    }
    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <div class="shadow-lg p-3 mb-5 bg-white rounded">
                    <div class="card-header py-3">
                        <p class="text-primary m-0 font-weight-bold">Add New Resources</p>
                    </div>
                    <h4 className="h3 mb-3 font-weight-normal header-name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add New Resources</h4>
                    <form className="needs-validation" noValidate>
                        <div class="row">
                            <div class="col">
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} >Resource Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="referenceName"
                                        placeholder="Enter Resource Name"
                                        value={this.state.referenceName}
                                        required
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>

                            <div class="col">
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ marginBottom: '5px' }} >Resource URL</label>
                                    <input type="text"
                                        className="form-control"
                                        name="url"
                                        placeholder="Enter Resource URL"
                                        value={this.state.url}
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                        </div>

                        <div class="row">


                            <div class="col">
                                <label style={{ marginBottom: '5px' }} >Subject</label>
                                <br />
                                <select name="subject"
                                    style={{ width: '400px', height: '34px' }}
                                    required
                                    value={this.state.subject}
                                    onChange={this.handleInputChange}>
                                    <option>Select Subject</option>
                                    <option>Combined Maths</option>
                                    <option>Physics</option>
                                    <option>Biology</option>
                                    <option>Statistics</option>
                                    <option>Accounting</option>
                                    <option>Econ</option>
                                    <option>IT</option>
                                    <option>History</option>
                                </select>
                            </div>
                        </div>



                        <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add Resource &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}