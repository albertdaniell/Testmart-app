import React ,{Component} from 'react';


export default class Patients extends Component {
render(){
  return (
    <div className="App">
     <h2>Patients</h2>
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
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quaerat quo reprehenderit ipsam. Expedita omnis, delectus esse officia et provident, rem veniam velit aspernatur distinctio quia, eius cum nostrum quo!

             </div>
         </div>
     </div>

     
    </div>
  );
}
}


