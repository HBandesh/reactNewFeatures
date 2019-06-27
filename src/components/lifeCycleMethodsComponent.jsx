import React from "react";

export class LifeCycleMethods extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.height = 100;
        this.state = {
            derivedValue: "",
            heightChangeCount: 0
        }
    }

    handleClick = () => {
        this.setState((state) => {
            return {
                heightChangeCount: state.heightChangeCount + 1
            }
        });
    }

    static getDerivedStateFromProps = (props,state) => {
        console.log(state);
        //Do not do this. This has been done just for knowledge purpose.
        return {
            derivedValue: props.data
        }
    }

    // getSnapshotBeforeUpdate = (prevProps, prevState) => {
    //     if(prevState.heightChangeCount !== this.state.heightChangeCount) {
    //         return this.ref.;
    //     }
    //     return null;
    // }

    // componentDidUpdate(prevProps,prevState,snapshot) {
    //     if (snapshot !== null) {
    //         this.height
    //     }
    // }

    render() {
        return(
            <React.Fragment>
                <p>The derived state value is : {this.state.derivedValue}</p>
                <button type="button" onClick={this.handleClick}>Click Me</button>
                <p>You have changed the height of DIV by: {this.state.heightChangeCount} times</p>
                <div ref={this.ref} style={{
                    width: '100px',
                    height: this.height,
                    backgroundColor: 'white'
                }}>
                </div>
            </React.Fragment>
        )
    }
}