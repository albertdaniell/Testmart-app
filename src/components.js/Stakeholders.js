import React, {Component} from 'react';
import Dash from './Dash'
import Sidenav from './Sidenav'
import {Link} from 'react-router-dom'
import loadingimage from '../assets/loadingjelly.gif'

import firebase from './Firebase';

var db = firebase.firestore()
export default class Stakeholders extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stakeholders: [],
            stakeRole: '',
            stakeholdersLoaded: false
        }
    }

    componentDidMount() {

        this.getStakeholders()
    }

    getStakeholders = () => {

        const stakeholders = [];
        db
            .collection('users')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {

                    const {email, fullname, geo, role, phone} = doc.data();
                    console.log(`${doc.id} => ${doc.data()}`);

                    stakeholders.push({
                        key: doc.id,
                        doc,
                        email,
                        fullname,
                        geo,
                        role,
                        phone

                    })
                    this.setState({stakeholdersLoaded: true})

                    this.setState({stakeholders})

                })
            })
    }
    render() {

        let stakeholderArray = this.state.stakeholders

        //stakeholderArray
        return (
            <div className="App">
                <Dash></Dash>
                <br></br>
                <br></br>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="col-sm-3">
                                <Sidenav></Sidenav>
                            </div>
                            <div className="col-sm-9 mainDiv">
                                <div className="App">
                                    <h2>Stakeholders</h2>
                                    <hr></hr>

                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                {/*
                                                {
                                                    stakeholderArray
                                                } */}

                                                <table className='table table-striped table-hover'>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Role</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this
                                                            .state
                                                            .stakeholders
                                                            .map(stakeholder => {
                                                                var StakeRole = ''

                                                                {

                                                                    if (stakeholder.role == 1) {
                                                                        StakeRole = 'Admin'

                                                                    } else if (stakeholder.role == 2) {
                                                                        StakeRole = 'Private sector'

                                                                    } else if (stakeholder.role == 2) {
                                                                        StakeRole = 'Mobile payment provider'

                                                                    } else {
                                                                        StakeRole = 'Null'
                                                                    }
                                                                }

                                                                return (
                                                                    <tr key={stakeholder.id}>
                                                                        <td>

                                                                            {stakeholder.fullname}

                                                                        </td>
                                                                        <td>{stakeholder.email}</td>
                                                                        <td>
                                                                            <span className="badge2" id='badge2'> {StakeRole} </span>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
}

                                                    </tbody>
                                                </table>

                                                {!this.state.stakeholdersLoaded
                                                    ? <img className='loadingImg' src={loadingimage} alt=""/>
                                                    : null
}
                                            </div>
                                            <div className="col-sm-4">
                                                <Link to='/addStakeholder' className='btn btn-primary'>
                                                    <i className='fa fa-plus'></i>
                                                      Add Stakeholder</Link>
                                                <br></br>
                                                <h4>Statistics</h4>

                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quaerat
                                                quo reprehenderit ipsam. Expedita omnis, delectus esse officia et provident, rem
                                                veniam velit aspernatur distinctio quia, eius cum nostrum quo!

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* {
  this.state.isLoggedIn?
  <Redirect to='/demo'>Go</Redirect>
  :null
} */}
            </div>

        );
    }
}
