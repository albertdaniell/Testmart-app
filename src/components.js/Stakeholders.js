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
            stakeholdersLoaded: false,
            privateSecNo:'_',
            mobilepaymentno:'_',
            adminsno:'_'
        }
    }

    componentDidMount() {

        this.getStakeholders()
        this.privateSectorsNo()
        this.adminsNo()
        this.MobilePaymentNo()
    }

    privateSectorsNo=()=>{


       var ref=db.collection('users')

       var privateSecNo=ref.where("role","==" ,"2")

       privateSecNo.get().then((querySnapshot)=>{

        this.setState({
            privateSecNo:querySnapshot.size
        })
           console.log(querySnapshot.size)
           querySnapshot.forEach(doc=>{


               console.log(doc.data())
           }).catch(error=>{
               console.log(error)
           })

       })

     
       
    }


    adminsNo=()=>{


        var ref=db.collection('users')
 
        var AdminNo=ref.where("role","==" ,"1")
 
        AdminNo.get().then((querySnapshot)=>{
            this.setState({
                adminsno:querySnapshot.size
            })
            console.log(querySnapshot.size)
            querySnapshot.forEach(doc=>{
                console.log(doc.data())
            }).catch(error=>{
                console.log(error)
            })
 
        })
 
      
        
     }


    MobilePaymentNo=()=>{


        var ref=db.collection('users')
 
        var Count=ref.where("role","==" ,"3")
 
        Count.get().then((querySnapshot)=>{
            this.setState({
                mobilepaymentno:querySnapshot.size
            })
            console.log(querySnapshot.size)
            querySnapshot.forEach(doc=>{
                console.log(doc.data())
            }).catch(error=>{
                console.log(error)
            })
 
        })
 
      
        
     }

    getStakeholders = () => {

        const stakeholders = [];
        db
            .collection('users')
            .get()
            .then(querySnapshot => {
             //   console.log(querySnapshot.size)

              
                querySnapshot.forEach(doc => {

                    const {email, fullname, geo, role, phone} = doc.data();
                //    console.log(`${doc.id} => ${doc.data()}`);

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
                <Dash stakeholderno={this.state.stakeholderNo}></Dash>
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

                                                                    } else if (stakeholder.role == 3) {
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

                                                <div className='countsDiv col-sm-12'>
                                                    Private Sectors <span className="badge3 pull-right"> {this.state.privateSecNo}</span>
                                                </div>

                                                <div className='countsDiv col-sm-12'>
                                                    System Admins<span className="badge3 pull-right"> {this.state.adminsno}</span>
                                                </div>

                                                <div className='countsDiv col-sm-12'>
                                                    Mobile payment providers <span className="badge3 pull-right"> {this.state.mobilepaymentno}</span>
                                                </div>

                                             
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
