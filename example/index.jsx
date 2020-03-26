import React from 'react';
// import MyComponent, {foo,bar} from '../../';

import Message from '../src/Message';
import { render } from 'react-dom';
const element = document.createElement("div");
document.body.appendChild(element);


class MessageBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		}
	}
	holdShow() {
		console.log('holdShow');
		this.setState({ show: !this.state.show });
    setTimeout(() => this.setState({ show: !this.state.show }), 2000);
	}
	render() {
		return (
			<div>
				<input type="button" value="clickme" onClick={() => this.holdShow()} />
				<Message
					show={this.state.show}
					msg="test"
				/>
			</div>
		);
	}
}


render(<MessageBox />, element);