import React, {Component} from 'react';

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
                                <li class="list-group-item">Second item</li>
                                <li class="list-group-item">Third item</li>
                            </ul>

                     
            </div>
        );
    }
}
