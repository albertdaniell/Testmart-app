import React ,{Component} from 'react';
import Dash from './Dash'
import Sidenav from './Sidenav'

import firebase from './Firebase';
import loadingimage from '../assets/loadingjelly.gif'

var db = firebase.firestore()


export default class Malaria extends Component {

    componentDidMount(){
        this.getMalariaPatiensts()
}


    constructor(props){
        super(props)

        this.state={
            patients:[],
            patientsLoaded:false
        }
    }

getMalariaPatiensts=()=>{
    const patients = [];
    var ref = db.collection("mrdt").where("test1_result","==","Positive").where("test1_result","==","Positive")

        .get()
        .then(querySnapshot => {
           console.log("mrdtt"+querySnapshot.size)

          
            querySnapshot.forEach(doc => {

                const {patient_name, private_sector, patient_id} = doc.data();
            //    console.log(`${doc.id} => ${doc.data()}`);

                patients.push({
                    key: doc.id,
                    doc,
                  private_sector,
                  patient_name,
                  patient_id,

                })
                this.setState({stakeholdersLoaded: true})

                this.setState({patients,patientsLoaded:true})

            })
        }).catch(error=>
            console.log(error))
}

render(){
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
     <h2>Malaria</h2>
     <hr></hr>

     <div className="container-fluid">
         <div className="row">
             <div className="col-sm-8">

             {!this.state.patientsLoaded
                                                    ? <img className='loadingImg' src={loadingimage} alt=""/>
                                                    : null
}

               <divc className='mydiv'>
               {
                     this.state.patients.map((patient)=>(
                         <div  className='myList' key={patient.patient_id}>
                             <span className="push-right"><i class="fas fa-plus-circle"></i></span>
                             <br/>

                             <span id='myListname'>{patient.patient_name}</span>
                             <p>{patient.private_sector}</p>
                         </div>
                     ))
                 }
               </divc>
             </div>
             <div className="col-sm-4">
                 <h4>Statistics</h4>
<p>This page lists all tests on patients which turned out to positive</p>
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


