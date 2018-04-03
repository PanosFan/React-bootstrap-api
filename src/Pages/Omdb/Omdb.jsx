import React, { Component } from 'react';

import Form from '../../Forms/Form';

class Omdb extends Component {


	state = {
		title : undefined,
		actors : undefined,
		country : undefined,
		writer : undefined,
		error : undefined
	}

	callApi = async (e) => {
		e.preventDefault();

		const Api_Key = "2613b509";
		const movie = e.target.elements.name.value;

		if (movie){
			const api_call = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${Api_Key}`);
		    const data = await api_call.json();

		    console.log(data);

		    if (data.Response === "False")
		    {
		    	this.setState({
		    		title : undefined,
					actors : undefined,
					country : undefined,
					writer : undefined,
					error : data.Error
		    	});
		    }
		    else		    
		    {
		    	this.setState({
		    		title : data.Title,
			    	actors : data.Actors,
			    	country : data.Country,
			    	writer : data.Writer,
			    	error : undefined
			    });
		    }
		}
		else
		{
			this.setState({
		   		title : undefined,
				actors : undefined,
				country : undefined,
				writer : undefined,
				error : "Please enter a proper name"
		   	});
		}

	}



	render () {
		return(
			<div className="Omdb container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form callApi={this.callApi} placeholder="Movie"/>
						{this.state.title && <p className="error">Title: <span className="apiSpan">{this.state.title}</span></p>}
						{this.state.actors && <p className="error">Actors: <span className="apiSpan">{this.state.actors}</span></p>}
						{this.state.country && <p className="error">Country: <span className="apiSpan">{this.state.country}</span></p>}
						{this.state.writer && <p className="error">Writer: <span className="apiSpan">{this.state.writer}</span></p>}
						<p className="error">{this.state.error}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Omdb;