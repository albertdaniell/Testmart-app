import React, {Component} from 'react';

import {Redirect} from 'react-router-dom'
import Dash from './components.js/Dash'
import Sidenav from './components.js/Sidenav'


class App extends Component {
    isLogFn = () => {

        if (this.state.isLoggedIn === true) {
            // alert(0)
            return <Redirect to='/demo'></Redirect>
        }
    }

    componentDidMount() {
        this.isLogFn()
    }
    constructor(props) {

        super(props)
        this.state = {
            isLoggedIn: true
        }
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

export default App;
