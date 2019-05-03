import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Demo from './components.js/Demo';
import Patients from './components.js/Patients'
import Stakeholders from './components.js/Stakeholders'
import Malaria from './components.js/Malaria'
import mRDT from './components.js/mRDT'
import AddStakeholder from './components.js/AddStakeholder'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDFeqQdz4geCfb9w-nJAzNO3IKK9bqIeVQ",
    authDomain: "testmart.firebaseapp.com",
    databaseURL: "https://testmart.firebaseio.com",
    projectId: "testmart",
    storageBucket: "testmart.appspot.com",
    messagingSenderId: "504893906425",
    appId: "1:504893906425:web:14447e98f8847be3"
};


ReactDOM.render(
       <Router>
                                    <div>
                                        <Route exact path='/' component={Patients}/>
                                        <Route  path='/demo' component={Demo}/>
                                        <Route  path='/stakeholders' component={Stakeholders}/>
                                        <Route path='/malaria' component={Malaria}></Route>
                                        <Route path='/mRDT' component={mRDT}></Route>
                                        <Route path='/addStakeholder' component={AddStakeholder}></Route>

                                    </div>
                                </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
