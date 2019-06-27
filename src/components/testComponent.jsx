import React from 'react';

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleClick = () => {
        this.setState((state,props) => {
            return {
                value: state.value + 1
            }
        });
        this.setState((state,props) => {
            return {
                value: state.value + 1
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>Click Me</button>
                <input type="text" value={this.state.value}></input>
            </React.Fragment>
        )
    }
}