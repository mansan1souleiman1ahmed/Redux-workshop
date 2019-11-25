import React from "react";

export default function Counter() {
    const counterVariable = 0;
    return (
        <div className={"counter"}>
            <React.Fragment>
                <h1>{` Counter :${counterVariable}`}</h1>
                <div className={"button-container-flex"}>
                    <button type={"button"}>{"+"}</button>
                    <br />
                    <button type={"button"}>{"-"}</button>
                </div>
            </React.Fragment>
        </div>
    );
}
