import React, {Component} from 'react';
import { Redirect,Link } from 'react-router-dom'

import firebase from './Firebase';
import malariaicon from '../assets/malaria.png'
import patienticon from '../assets/patient.png'
import stakeicon from '../assets/stakeholders.png'
import testicon from '../assets/test.png'

var db = firebase.firestore()


class Dash extends Component {


    componentDidMount(){
this. getStakeholderNo();
this. getPatientsNo()
this.getmRDT()

    }

    constructor(props){
        super(props)

        this.state={
            stakeholdersno:'_',
            patientsno:'_',
            mrdt:'_'
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

    getmRDT=()=>{
        var ref = db.collection("patients")
        ref.get()
        .then(snapShot=>{
            snapShot.forEach(doc=>{
                console.log(doc.id)

                var ref2=ref.doc(doc.id).collection('mrdt')

                ref2.where("rdt_test","==",true).get().then((snapShot2)=>{
                   //console.log(snap2) 

                  

                   snapShot2.forEach((doc2)=>{
                    console.log(snapShot2.size)

                    this.setState({
                        mrdt:snapShot2.size
                    })
                       console.log("heheh" + snapShot2.size)
                     //  console.log(doc2.data().rdt_test)
                   })
                })
            })
        })

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
                                    <img className='pull-right' src={patienticon} alt=""/>
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
                                    <img id='stakeholdericon' className='pull-right stakeholdericon' src={stakeicon} alt=""/>

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
                                    <img className='pull-right' src={malariaicon} alt=""/>

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
                                    <span className='spancounter'>{this.state.mrdt}</span>
                                    <img className='pull-right' src={testicon} alt=""/>

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
