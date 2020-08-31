import React,{ Component} from "react";

import "./assets/style.css";
import quizs from "./quizService/index1";
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

class Question extends Component{
	state={
		questionBank:[],
		score: 0,
		responses: 0
	};
	getQuestions=()=>{
		quizs().then(question =>{
			this.setState({
				questionBank:question
			});
		});

	};
	computeAnswer =(answer,correctAnswer)=>{
		if (answer=== correctAnswer){
			this.setState({
				score: this.state.score + 1
			});

		}
		this.setState({
			responses: this.state.responses<10 ? this.state.responses +1 :10
		})
	}
	playAgain=()=>{
		this.getQuestions();
		this.setState({
			score:0,
			responses:0
		})
	}
	componentDidMount() {
		this.getQuestions();
	}
	render()
	{
		return(
			<div className="container">
			<div className="title">
			 Welcome, To Quiz
			</div>
			{this.state.questionBank.length >0 && this.state.responses<10 && this.state.questionBank.map(
				({question,answers,correct,questionId})=> (
					<QuestionBox question={question} options={answers} key={questionId} selected={answer =>this.computeAnswer(answer,correct)}/>
				)
				)}
				{this.state.responses === 10? (<Result score={this.state.score} playAgain={this.playAgain}/>):null}	
			</div>
			);
	}

}
export default Question;