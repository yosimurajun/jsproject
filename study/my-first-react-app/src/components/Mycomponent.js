import React, { Component } from 'react';

class MyComponenet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, onButtonClicked } = this.props;
        return (
            <div>
                {/* <h1>{this.props.title}</h1>
                <button onClick={this.props.onButtonClicked}>Click Me!</button> */}
                <h1>{title}</h1>
                <button onClick={onButtonClicked}>button</button>
            </div>
        )
    }
}

export default MyComponenet;