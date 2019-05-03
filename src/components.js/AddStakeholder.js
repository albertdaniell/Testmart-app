import React, {Component} from 'react';
import Dash from './Dash'
import Sidenav from './Sidenav'
import {Link} from 'react-router-dom'



// Initialize Firebase
import firebase from './Firebase';
var db = firebase.firestore();
export default class Stakeholders extends Component {

    constructor(props) {
        super(props)
        this.state = {
            role: '',
            fullname: '',
            email: '',
            password: '',
            phone: '',
            geo_coordinates: '',
            showGeoInput: false,
            message: '',
            success: false,
            error: false,
            showCreatebtn: true
        }

    }

    componentWillUpdate() {
        //  this.geoLocFn()
    }

    geoLocFn = () => {}

    getrole = (event) => {
        // alert(event.target.value)
        this.setState({role: event.target.value})

        setTimeout(() => {
            if (this.state.role === '2') {
                this.setState({showGeoInput: true})
            } else {
                this.setState({showGeoInput: false})
            }

        }, 10)
    }

    getfnam = (event) => {

        this.setState({fullname: event.target.value})

    }

    getemail = (event) => {
        this.setState({email: event.target.value})
    }

    getpass = (event) => {
        this.setState({password: event.target.value})
    }

    getphone = (event) => {
        this.setState({phone: event.target.value})
    }

    getgeo = (event) => {
        this.setState({geo_coordinates: event.target.value})
    }

    addToFirestore=()=>{
        db.collection("users").add({
            fullname:this.state.fullname,
            email:this.state.email,
            phone:this.state.phone,
            role:this.state.role,
            geo:this.state.geo_coordinates,
            
        }).then(docRef=>{
            console.log("Document written with ID: ", docRef.id);

        }).catch(error=>{
            this.setState({
                error:true,
                message:error.message
            })
        })
    }

    firebaseCreateAcc = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                this. addToFirestore()

                this.setState({
                    success: true,
                    message: 'Successfully registered a user with the email' + this.state.email
                })

                setTimeout(() => {

                    this.setState({
                        role: null,
                        fullname: '',
                        email: '',
                        password: '',
                        phone: '',
                        geo_coordinates: '',
                        showCreatebtn: true
                    })
                }, 1000)
                console.log("Success")

            })
            .catch(error => {

                this.setState({error: true, message: error.message})
                console.log(error)
            })

    }

    addStakeFn = (event) => {
        event.preventDefault()

        this.setState({showCreatebtn: false})

        if (this.state.fullname === '' || this.state.email === '' || this.state.password === '') {
            this.setState({error: true, success:false ,message: 'Please fill in stakeholder demographics'})

            this.setState({showCreatebtn: true})

            return 0;
        }

        if(this.state.role == ''){
            this.setState({error: true, success:false, message: 'Please choose a role'})

            this.setState({showCreatebtn: true})

            return 0;
        }

        if (this.state.phone == '') {

            this.setState({error: true, success:false, message: 'Phone number cannot be empty'})

            this.setState({showCreatebtn: true})

            return 0;
        }

        if (this.state.showGeoInput == true && this.state.geo_coordinates === '') {

            this.setState({error: true, success:false, message: 'Geo Location cannot be empty'})

            this.setState({showCreatebtn: true})

            return 0;

        }

        this.setState({error: false})

        this.firebaseCreateAcc()

    }
    render() {
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

                                    <ul class="pager">
                                        <li>
                                            <Link to='/stakeholders'>Previous</Link>
                                        </li>

                                    </ul>
                                    <h3>
                                        Add Stakeholders</h3>
                                    <hr></hr>

                                    {this.state.success
                                        ? <div class="alert alert-success">
                                                <strong>{this.state.message}</strong>

                                            </div>
                                        : null
}

                                    {this.state.error
                                        ? <div class="alert alert-danger">
                                                <strong>{this.state.message}</strong>

                                            </div>
                                        : null
}

                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm-12"></div>
                                            <form action="">
                                                <h5>Stakeholder's Demographics</h5>

                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        value={this.state.fullname}
                                                        onChange={this.getfnam}
                                                        className="form-control"
                                                        placeholder='Fullname'/>

                                                </div>

                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        value={this.state.email}
                                                        onChange={this.getemail}
                                                        className="form-control"
                                                        placeholder='JohnDoe@gmail.com'/>

                                                </div>

                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        value={this.state.password}
                                                        onChange={this.getpass}
                                                        className="form-control"
                                                        placeholder='Password ***'/>

                                                </div>

                                                <h5>Other info</h5>
                                                <div className="form-group">
                                                    <select onChange={this.getrole} class="form-control" id="sel1">
                                                     <option value=''>Choose the role</option>
                                                        <option value={1}>Admin</option>
                                                        <option value={2}>Private Retail Sector</option>
                                                        <option value={3}>Bank/ Mobile Payment provider</option>

                                                    </select>

                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="number"
                                                        value={this.state.phone}
                                                        onChange={this.getphone}
                                                        className="form-control"
                                                        placeholder='791817168'/>

                                                </div>

                                                {this.state.showGeoInput
                                                    ? <div className="form-group">
                                                            <input
                                                                type="text"
                                                                value={this.state.geo_coordinates}
                                                                onChange={this.getgeo}
                                                                className="form-control"
                                                                placeholder='Geo coordinates'/>

                                                        </div>
                                                    : null
}

                                                <div className="form-group">

                                                    {this.state.showCreatebtn
                                                        ? <button onClick={this.addStakeFn} className="btn btn-primary">Create</button>
                                                        : <button disabled className="btn btn-primary">Create</button>
}
                                                </div>

                                            </form>
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
