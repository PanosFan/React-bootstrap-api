import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import $ from 'jquery';
import './Navbar.css';

class Navbar extends Component {

	state = {
		toggler : false
	}

	handleclick = () => {
		this.setState ({
			toggler : !this.state.toggler
		});
	}







	render () {
		return (
			<div className="Navbar">

				<nav className="navbar  navbar-expand-lg fixed-top" id="main-navbar">

				    <span className="navbar-brand">Brand-Name</span>

				    <button onClick={this.handleclick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				      <span className={this.state.toggler? "navbar-toggler-icon on" : "navbar-toggler-icon"}> 
				       	<div className="span" id="one"></div>
				        <div className="span" id="two"></div>
				       	<div className="span" id="three"></div>
				      </span>
				     </button>
				 		
					

				    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				       <ul className="navbar-nav">
				         <li className="nav-item">
				           <NavLink exact activeClassName="active-link" to="/" >Home</NavLink>
				         </li>
				         <li className="nav-item">
				           <NavLink exact activeClassName="active-link" to="/weather" >Weather</NavLink>
				         </li>
				         <li className="nav-item">
				           <NavLink exact activeClassName="active-link" to="/github" >Github</NavLink>
				         </li>
				         <li className="nav-item">
				           <NavLink exact activeClassName="active-link" to="/omdb" >Omdb</NavLink>
				         </li>				        
				       </ul>          
				    </div>
				</nav>           
			</div>
		);
	}
}



// $(function(){      
// 	$(".navbar-toggler").on("click",function (){
//     	$(".navbar-toggler-icon").toggleClass('on');
//     });
// });

            


            

export default Navbar;