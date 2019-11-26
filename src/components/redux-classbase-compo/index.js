import React, {Component} from "react";
import MemeGenerator from "./meme-generator";
import Header from "./header";

export class ReduxClassBase extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <div
                    style={{
                        marginTop: "20px",
                        textAlign: "center",
                    }}>
                    <MemeGenerator />
                </div>
            </div>
        );
    }
}

export default ReduxClassBase;
