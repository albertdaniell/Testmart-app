import React ,{Component} from 'react';
import Dash from './Dash'
import Sidenav from './Sidenav'

export default class mrdt extends Component {
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
     <h2>mRDT and ACT</h2>
     <hr></hr>

     <div className="container-fluid">
         <div className="row">
             <div className="col-sm-8">

                 <table className='table'>
                    <thead>
                    <tr>
                         <th>Heading 1</th>
                         <th>Heading 2</th>
                         <th>Action</th>
                     </tr>
                    </thead>
                    <tbody>
                        <tr><td>Dummy data</td>
                        <td>Dummy data</td>
                        
                        
                        </tr>

                        <tr><td>Dummy data</td>
                        <td>Dummy data</td>
                        
                        
                        </tr>

                        <tr><td>Dummy data</td>
                        <td>Dummy data</td>
                        
                        
                        </tr>

                        <tr><td>Dummy data</td>
                        <td>Dummy data</td>
                        
                        
                        </tr>

                        <tr><td>Dummy data</td>
                        <td>Dummy data</td>
                        
                        
                        </tr>

                        <tr><td>Dummy data</td>
                        <td>Dummy data</td>
                        
                        
                        </tr>
                    </tbody>
                 </table>
             </div>
             <div className="col-sm-4">
                 <h4>Statistics</h4>
                
<p>This page lists all patients who were tested for malaria and the ones who were given ACT</p>
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


