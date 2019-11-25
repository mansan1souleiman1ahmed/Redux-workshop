import React from "react";

import Navbar from "./components/regular-components/navbar";

import ReduxFunctionalPage from "./components/redux-functional-compo";

//Import for the routing.
import {Switch, Route} from "react-router-dom";
import ReduxClassBase from "./components/redux-classbase-compo";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route
                    exact
                    path={"/redux-functional-exercice"}
                    component={ReduxFunctionalPage}
                />
                <Route
                    exact
                    path={"/redux-class-base-exercice"}
                    component={ReduxClassBase}
                />
            </Switch>
        </div>
    );
}
export default App;
