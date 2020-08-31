import React from 'react';


class Welcome extends React.Component{
	constructor(props) {
		super(props);
		this.state = { username: '',pass:null };
	  }
	
	myChangeHandler = (event) => {
		let nam=event.target.name;
		let val=event.target.value;
		this.setState({[nam]:val})

	  }
	  mySubmitHandler = (event) => {
		event.preventDefault();
		alert("You are submitting " + this.state.username);
	  }

	render()
	{
		let head='';
		if(this.state.username){
		head=<h1>hello {this.state.username}{this.state.pass}</h1>
		}
		else
		{
			head='';
		}
		return(
			<form onSubmit={this.mySubmitHandler}>
				{head}
				<h3>Enter your Name:</h3>
				<input type="text"  name="username" onChange={this.myChangeHandler}/>
				<h3>Enter password:</h3>
				<input type="password" name="pass" onChange={this.myChangeHandler}/>
				<br/>
				<input
        type='submit'
      />
			</form>
			


			);
	}

}


export default Welcome;