import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: Number(props.initcount) || 0
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.initcount !== this.props.initcount) {
            this.setState({
                count: Number(this.props.initcount) || 0
            });
        }
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    decrement = () => {
        this.setState(prevState => ({
            count: Math.max(0, prevState.count - 1)
        }));
    }

    reset = () => {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default Counter;
