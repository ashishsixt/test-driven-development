import React, { Component } from "react";
import Comment from "./comment_box";
import CommentList from "./comment_list";
export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World, Introduction to test driven Development</h1>
				<Comment/>
				<CommentList />
			</div>
		);
	}
}