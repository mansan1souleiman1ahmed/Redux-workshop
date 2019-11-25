import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import App from "./app.js";

//IMPORT FOR REDUX

//IMPORT FOR ROUTER
import {BrowserRouter} from "react-router-dom";

export default function Index() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

ReactDOM.render(<Index />, document.querySelector("#root"));
