import React from "react";

export default function Login() {
    return (
        <div className={"login"}>
            <div className={"display-show"}>
                <p>{"You are logged in!"}</p>
            </div>
            <button type={"button"}>{"LOg IN "}</button>
        </div>
    );
}
//`display${loggedVariable ? "-show" : "-hide"}`
