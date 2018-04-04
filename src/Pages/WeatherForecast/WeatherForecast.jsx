import React from 'react';
import axios from 'axios';

import Form from '../../Forms/Form';

export default class Github extends React.Component {




	state = {
		error : undefined,
		name : undefined,
		array : []
	}

	callApi = (e) => {
		e.preventDefault();

		const API_KEY="3a52a27570d5f406e3d262754a68256b";
		const city = e.target.elements.name.value;
		const country = e.target.elements.country.value;
		const unit = e.target.elements.units.value;

		if (city && country) {
			axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${unit}&appid=${API_KEY}`)
			.then(res => {
				console.log(res)
				this.setState({
					error : undefined,
					array : res.data.list,
					name : res.data.city.name
				});
			})
			.catch(error => {
				console.log(error)
			});

		}
		else
		{
			this.setState({
				error : "Please enter values",
				name : undefined,
				array : []
			});
		}


	}




















	render(){
		return(
			<div className="WeatherForecast container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form callApi={this.callApi} placeholder1="City" placeholder2="Country"/>
						<p>Name {this.state.name}</p>
						<ul>
							{this.state.array.map((item, index) => {
								return <li key={index}><span className="error">Average Temperature: {item.main.temp} &#x2103;</span></li>
							})}
						</ul>
						<p className="error">{this.state.error}</p>
					</div>
				</div>
			</div>
		);
	}
}