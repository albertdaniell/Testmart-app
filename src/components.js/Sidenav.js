import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Sidenav extends Component {
    render() {
        return (
            <div className="App">
              
          

                            <span className="logo">Testmart App</span>
                            <br/><br/>
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <p>Logged in as
                                        <br/>
                                        <span className="badge">
                                            Albertagoya@gmail.com</span>
                                    </p>
                                </li>
                                <li className='list-group-item'>

                                <Link to ='/addStakeholder'>Add Stakeholder</Link>
                                </li>

                                <li className='list-group-item'>

<Link to ='/addStakeholder'>Negative Malaria</Link>
</li>

<li className='list-group-item'>

<Link to ='/addStakeholder'>Positive Malaria</Link>
</li>

<li className='list-group-item'>

<Link to ='/addStakeholder'>Patients on ACT</Link>
</li>
                                <li class="list-group-item">Log Out</li>
                            </ul>

                     
            </div>
        );
    }
}
