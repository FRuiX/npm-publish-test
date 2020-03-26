import React, { Component, PropTypes } from 'react';
import './Message.scss';

export default class Message extends Component {
  componentWillUpdate(nextProps) {
    const { show } = nextProps;
    if (show) {
      document.body.style = 'overflow: hidden;';
      this.messageBox.className = 'message-box in';
    } else {
      document.body.style = '';
      this.messageBox.className = 'message-box';
    }
  }
  render() {
    const { msg } = this.props;
    return (
      <div className="message-box" ref={(n) => { this.messageBox = n; }}>
        <div className="message-modal" />
        <div className="message-content-box">
          <div className="content-content">
            <div className="content-body">
              <span>{msg}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Message.propTypes = {
  show: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
};
