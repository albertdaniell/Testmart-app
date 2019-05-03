import React, {Component} from 'react';
import { Redirect,Link } from 'react-router-dom'

import firebase from './Firebase';

var db = firebase.firestore()


class Dash extends Component {


    componentDidMount(){
this. getStakeholderNo();
this. getPatientsNo()

    }

    constructor(props){
        super(props)

        this.state={
            stakeholdersno:'_',
            patientsno:'_'
        }
    }


    getStakeholderNo=()=>{
        db
        .collection('users')
        .get()
        .then(querySnapshot => {
            console.log(querySnapshot.size)

            this.setState({
                stakeholdersno:querySnapshot.size
            })
        });
    }

    getPatientsNo=()=>{
        db
        .collection('patients')
        .get()
        .then(querySnapshot => {
            console.log(querySnapshot.size)

            this.setState({
                patientsno:querySnapshot.size
            })
        });
    }

    getMalariaNo=()=>{
        db
        .collection('patients')
        .get()
        .then(querySnapshot => {
            console.log(querySnapshot.size)

            this.setState({
                patientsno:querySnapshot.size
            })
        });
    }
    render() {
        return (
            <div className="App">
                <div className="container-fluid navContainer">

                    <div className="col-row">

                        <div className="col-sm-12">

                        <Link to ='/'>
                        
                        <div className="col-sm-3 " id='myPanel'>
                                <div className="col-sm-12 myPanel p1">
                                    <h3>Patients
                                        <span className="pull-right">
                                            <i class="fas fa-chevron-right"></i>
                                        </span>
                                    </h3>
                                    <span className='spancounter'>{this.state.patientsno}</span>
                                    <br/>
                                    <br/>

                                </div>
                            </div>
                        </Link>

                          <Link to='/stakeholders'>
                          
                          <div className="col-sm-3" id='myPanel'>
                                <div className="col-sm-12 myPanel p2">
                                    <h3>Stakeholders
                                        <span className="pull-right">
                                            <i class="fas fa-chevron-right"></i>
                                        </span>
                                    </h3>
                                    <span className='spancounter'>{this.state.stakeholdersno    }</span>
                                    <br/>
                                    <br/>

                                </div>
                            </div>
                          </Link>

                         <Link to ='/malaria'>
                         <div className="col-sm-3" id='myPanel'>
                                <div className="col-sm-12 myPanel p3">
                                    <h3>
                                        Malaria
                                        <span className="pull-right">
                                            <i class="fas fa-chevron-right"></i>
                                        </span>
                                    </h3>
                                    <span className='spancounter'>{this.state.patientsno}</span>
                                    <br/>
                                    <br/>

                                </div>
                            </div>
                         </Link>

                       <Link to='/mRDT'>
                       <div className="col-sm-3" id='myPanel'>
                                <div className="col-sm-12 myPanel p4">
                                    <h3>
                                        RDT Tests /ACT
                                        <span className="pull-right">
                                            <i class="fas fa-chevron-right"></i>
                                        </span>
                                    </h3>
                                    <span className='spancounter'>{this.state.patientsno}</span>
                                    <br/>
                                    <br/>

                                </div>
                            </div>
                       </Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Dash;
