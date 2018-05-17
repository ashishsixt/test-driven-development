import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

function getState() {
	return {
		text: ""
	};
}

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = getState();
	}

	handleChange(event) {
		let text = event.target.value;
		this.setState({
			text: text
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveComment(this.state.text);
		this.setState({
			text: ""
		});
	}

	render() {
		return (
			<div className={"comment-box"}>
				<div>hi</div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<textarea
						value={this.state.text}
						onChange={this.handleChange.bind(this)}/>
					<div>
						<button>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);