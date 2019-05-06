import React ,{Component} from 'react';
import Dash from './Dash'
import Sidenav from './Sidenav'
import firebase from './Firebase';
import loadingimage from '../assets/loadingjelly.gif'

var db = firebase.firestore()
export default class Patients extends Component {

    constructor(props){

        super(props)
        this.state={
            patientsLoaded: false,
            patients:[]
        }
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

                   console.log(snapShot2.size)

                   snapShot2.forEach((doc2)=>{
                     //  console.log(doc2.data().rdt_test)
                   })
                })
            })
        })

    }

    getAllPatients = () => {

        const patients = [];

        var ref = db.collection("patients")

        ref
            .get()
            .then(querySnapshot => {

                //alert(querySnapshot.size)

                querySnapshot.forEach(doc => {

                    // alert(doc.data().age) this.setState({     patients:doc.data() })
                    const {fullname, phone, age, private_sector, gender} = doc.data();
                    //     // alert(doc.data())    // alert(0)
                    patients.push({
                        key: doc.id,
                        doc,
                        fullname,
                        phone,
                        age,
                        gender,
                        private_sector

                    })

                    //alert("heheh")    alert(0)

                    this.setState({patients, patientsLoaded: true})

                })

            })
            .catch(error => {})
    }

    componentDidMount(){
        this.getAllPatients()
        this.getmRDT()
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
                            <h2>Patients</h2>
                                    <hr></hr>

    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-8">

                <table className='table'>
                   <thead>
                   <tr>
                        <th>Fullname</th>
                        <th>Phone</th>
                        <th>Private Sector</th>
                    </tr>
                   </thead>
                   <tbody>
                       
                 {
                     this.state.patients.map((patient)=>(
                         <tr>
                             <td>{patient.fullname}</td>
                             <td>{patient.phone}</td>
                             <td>{patient.private_sector}</td>
                         </tr>
                     ))
                 }
                   </tbody>
                </table>
{
   !this.state.patientsLoaded?
   <img className='loadingImg' src={loadingimage} alt=""/>
:null
}
            </div>
            <div className="col-sm-4">
                <h4>Statistics</h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quaerat quo reprehenderit ipsam. Expedita omnis, delectus esse officia et provident, rem veniam velit aspernatur distinctio quia, eius cum nostrum quo!

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


