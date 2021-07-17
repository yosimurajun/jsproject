import React, { Component } from 'react';
import MyComponenet from './components/Mycomponent';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.onClickBtn = this.onClickBtn.bind(this);
        this.countUp = this.countUp.bind(this);
    }

    onClickBtn() {
        console.log("Button has been cliked!");
    }

    countUp() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <MyComponenet title="React" onButtonClicked={this.onClickBtn} />
                <button onClick={this.countUp}>Increase</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}


export default App;