import React, {Component} from 'react';

import './Form.css';

class Form extends Component {
	render () {
		return (
			<div className="Form">
				<form onSubmit={this.props.callApi}>
					<input type="text" name="name" placeholder={this.props.placeholder1}/>	
					<br/>
					<input className={this.props.classCall} type="text" name="country" placeholder={this.props.placeholder2}/>	
					<br className={this.props.classCall} />						
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;