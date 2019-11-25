import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={"navbar"}>
            <ul>
                <li>
                    <Link to={"/redux-functional-exercice"}>
                        <h3>{"Redux functional exercice"}</h3>
                    </Link>
                </li>
                <li>
                    <Link to={"/redux-class-base-exercice"}>
                        <h3>{"Redux class exercice with thunk"}</h3>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
