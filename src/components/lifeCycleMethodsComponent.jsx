import React from "react";

export class LifeCycleMethods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            derivedValue: ""
        }
    }

    static getDerivedStateFromProps = (props,state) => {
        console.log(state);
        //Do not do this. This has been done just for knowledge purpose.
        return {
            derivedValue: props.data
        }
    }

    render() {
        return(
            <React.Fragment>
                <p>The derived state value is : {this.state.derivedValue}</p>
            </React.Fragment>
        )
    }
}