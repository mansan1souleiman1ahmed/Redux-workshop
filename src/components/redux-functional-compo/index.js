import React from "react";
import Counter from "./counter";
import Login from "./login";
import User from "./user";

export default function ReduxFunctionalPage() {
    return (
        <div>
            <div className={"container-flex"}>
                <Counter />
                <Login />
                <User />
            </div>
        </div>
    );
}
