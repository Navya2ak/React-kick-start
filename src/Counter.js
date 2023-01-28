import React from "react";
class TestClasscomp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    increment = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (
            <>
                <h2>Hey {this.props.name} This is a class component</h2>

                <h5>{this.state.counter}</h5>
                <button className="counter" onClick={this.increment}>+</button>
                <button className="counter" onClick={this.decrement}>-</button>
            </>
        )
    }
}
export default TestClasscomp