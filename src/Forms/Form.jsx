import React, {Component} from 'react';

import './Form.css';

class Form extends Component {
	render () {
		return (
			<div className="Form">
				<form onSubmit={this.props.callApi}>
					<input type="text" name="name" placeholder={this.props.placeholder}/>	
					<br/>						
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;