import React from "react";
import memoize from "memoize-one";

export class Memoize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            mutiplicationValue: "",
        }
    }

    multiply = memoize((a) => +a * 2);

    handleInputClick = e => {
        this.setState({
            value: e.target.value
        });
    }

    handleButtonClick = () => {
        const mulVal = this.multiply(this.state.value);
        this.setState({
            mutiplicationValue: mulVal
        });
    }

    render() {
        return(
            <React.Fragment>
                <h1>Example for Memoization</h1>
                <button onClick={this.handleButtonClick}>Click Me</button>
                <input type="text" value={this.state.value} onChange={this.handleInputClick}></input>
                <p>Multiplication with 2 : {this.state.mutiplicationValue}</p>
            </React.Fragment>
        )
    }
}