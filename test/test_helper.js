import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import _ from "jquery";
import {JSDOM as jsdom} from "jsdom";
import chai, {expect} from "chai";
import chaiJquery from "chai-jquery";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "../src/reducers";

const $ = _(window);
let dom = new jsdom("<!doctype html><html><body></body></html>");

global.document = dom.window.document;
global.window = dom.window;
global.navigator = global.window.navigator;
chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
	const app = (
		<Provider store = {createStore(reducers, state)}>
			<ComponentClass {...props}/>
		</Provider>
	);
	const reactComponentInstance = ReactTestUtils.renderIntoDocument(app);
	return $(ReactDOM.findDOMNode(reactComponentInstance));
}

$.fn.simulate = function (eventName, value) {
	if(value) {
		this.val(value);
	}
	ReactTestUtils.Simulate[eventName](this[0]);
};

export {
	renderComponent, expect
};