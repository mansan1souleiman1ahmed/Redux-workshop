import React, {Component} from "react";

export class ReduxClassBase extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>{"Class"}</h1>
            </div>
        );
    }
}

export default ReduxClassBase;
