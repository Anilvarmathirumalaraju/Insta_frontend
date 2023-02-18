import './landing.css';
import { Link } from "react-router-dom"

const Landing_page=()=>{
    
    return (
        <>
        {/* <img src="https://tse1.mm.bing.net/th?id=OIP.fPfszeccdP2EFVxo95cFcAHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119" alt="loadingbg" id="coverImg"/> */}
        <div id="card">
        <div className="container1">
        <img className='landimg' src={require("./images/download1.jpg")} alt="" />
            <div className='container2'>
                <h2>  
                    10X Academy 04
                </h2>
                <Link to="/postview" ><button id="landbutton">ENTER</button></Link>
            </div>
            
        </div>
        </div>
        </>
    
    );
}
export default Landing_page;


// import React from 'react'
// import {Link} from 'react-router-dom'
// import './landing.css'

// function Landing_page() {
//   return (
//     <div className="landpage">
//       <img className='landimg' src={require("./images/nature.jp")} alt="" />
//       <div className="text">
//         <h3 >10X Academy</h3>
//         <Link to="/postview">
//           <button className='landbtn'>Enter</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Landing_page