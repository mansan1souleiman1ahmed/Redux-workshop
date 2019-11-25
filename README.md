# Redux functional components

## Step 1 Set up for Redux

Import redux.

npm install --save redux

npm install --save react-redux

Import router.

npm install --save react-router-dom

## Step 2 Create all folders

Inside the folder called components create the following folders:

-   one called actions for the actions, && create a file called index.js,

-   one called reducers for the reducers, && create a for each reducer (each one depend on the number of state you to be stored): counter.js, index.js,

    islogged.js,

-   one called redux-classbase-compo for the reducers, create a file called index.js, (it corresponds to the page that contains the meme exercice),

-   one called redux-functional-compo for the reducers create a file called counter.js, index.js, login.js, user.js (it corresponds to the page that contains

the redux-functional exercices),

-   one called regular-components for the reducers(it contains all the components which are not supoosed to be rendered in the redux folder).

## Step 3 The actions

actions/index.js

It is an a Redux method that triggers the actions.

The dispatch() is the method used to trigger a reducer changes to the store.

In react-redux is simply trying to give you convenient access to it. Note, however, that dispatch is not available on props if you

do pass in actions to your connect function.

You want to trigger the function increment with dispatch on click.

```
export function increment() {
    return {
        type: "INCREMENT",
    };
}
export function decrement() {
    return {
        type: "DECREMENT",
    };
}
export function logIn() {
    return {
        type: "LOG_IN",
    };
}

```

https://redux.js.org/basics/actions

## Step 4 The reducers

reducers/counter.js

```
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};
export default counterReducer;

```

reducers/islogged.js

```
function loggedReducer(state = false, action) {
    switch (action.type) {
        case "LOG_IN":
            return !state;
        default:
            return state;
    }
}
export default loggedReducer;

```

https://redux.js.org/basics/reducers

## Step 5 The combiner

./reducers/index.js

```
import {combineReducers} from "redux";
import counterReducer from "./counter";
import loggedReducer from "./islogged";
const allReducer = combineReducers({
    counterReducer,
    loggedReducer,
});
export default allReducer;

```

https://redux.js.org/api/combinereducers

## Step 6 The store

A store is not a class. It's just an JS OBJECT with a few methods on it.

What is its purpose?

A store holds the whole state tree of your application.

How is it created? With a function called createStore.

In Redux you want the ability to store your states inside one object. However

you cannot simply declare state inside the object, you may want to change

states at a certain point (it the purpose of state => to change value.).

So each state you want to store should be inside a Reducer.

And those Reducers contain actions which are (with the dispatch method) to

change state.

Create a file called store.js

```
//REDUX IMPORT
import {createStore} from "redux";
import allReducer from "./components/reducers/index.js";

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;


```

ref : https://github.com/zalmoxisus/redux-devtools-extension For extension.

https://redux.js.org/api/store

## Step 7 All others folders.

app.js

```
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

```

index.js

```
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

```

style.scss

```
.navbar {
    margin: 0px;
    width: 100%;
    background-color: #9e5f93;
    ul {
        text-align: center;
        li {
            a {
                text-decoration: none;
                color: lightgray;
            }
            display: inline-block;
            padding: 20px;
            &:hover {
                cursor: pointer;
                color: white;
            }
        }
    }
}
.container-flex {
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .counter {
        width: 350px;
        height: 350px;
        background-color: #b7a5b4;
        .button-container-flex {
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            button {
                width: 50px;
                height: 50px;
                &:hover {
                    cursor: pointer;
                    background-color: #87d565;
                }
            }
        }
    }
    .login {
        width: 350px;
        height: 350px;
        background-color: #b7a5b4;
        button {
            width: 50px;
            height: 50px;
            &:hover {
                cursor: pointer;
                background-color: #87d565;
            }
        }
        .display-show {
            display: block;
        }
        .display-hide {
            display: none;
        }
    }
    .user {
        width: 350px;
        height: 350px;
        background-color: #b7a5b4;
    }
}


```

### The actions

The action is a function that returns an object.

```

export function increment() {
    return {
        type: "INCREMENT",
    };
}

export function decrement() {
    return {
        type: "DECREMENT",
    };
}

export function signIn() {
    return {
        type: "IS",
    };
}

```

## Step 5 Reducers

What is it?

Reducers are pure functions that take in a state and action and return a new state.

They specify how the application's state changes in response to actions sent to the store.

Next you create a folder called reducers.

-   you create inside the folder reducers a file for each reducer you want to create,

the first one counter.js.

```

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

```

export default counterReducer;

-   the second one is called islogged.js

```

function loggedReducer(state = false, action) {
    switch (action.type) {
        case "SIGN_IN":
            return !state;
        default:
            return state;
    }
}
export default loggedReducer;


```

You must combine all reducers inside one reducer before you put any reducer inside the createStore function.

For that you must import all reducers inside one file and then you reduce all reducers in one reducer by

using => the combineReducers = helper function turns an object whose values are different reducing functions

into a single reducing function you can pass to createStore.

-   You must create Reducers.

-   You must create a file where you import all reducers (in general you put that file inside the reducers folder

    and you name it index.js).

-   You must combine all reducers with combineReducers().

*   you create a file called index.js inside this one you will put the combiner.

```

import {combineReducers} from "redux";
import counterReducer from "./counter";
import loggedReducer from "./islogged";
const allReducer = combineReducers({
    counterReducer,
    loggedReducer,
});
export default allReducer;

```

## Step 6 The store

Inside src folder you create a file.js called store.js.

```

import {createStore} from "redux";

import allReducer from "./components/reducers/index.js";
const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

```

## Step 7 Create components that must acces the store and get the state.

./reducers/counter.js

```
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./../actions";

export default function Counter() {
    const counterVariable = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div className={"counter"}>
            <React.Fragment>
                <h1>{` Counter :${counterVariable}`}</h1>
                <div className={"button-container-flex"}>
                    <button
                        type={"button"}
                        onClick={() => dispatch(increment())}>
                        {"+"}
                    </button>
                    <br />
                    <button
                        type={"button"}
                        onClick={() => dispatch(decrement())}>
                        {"-"}
                    </button>
                </div>
            </React.Fragment>
        </div>
    );
}


```

./reducers.login.js

```
import React from "react";
export default function Login() {
    return (
        <div className={"login"}>
            <div className={"display-show"}>
                <p>{"You are logged in!"}</p>
            </div>
            <button
                type={"button"}>
                {"LOg IN "}
            </button>
        </div>
    );
}

```

### Step 8 The wrapping of the App with provider component

What is it?

It is a special component that indicates to react that Redux is used inside the component. The provider imported

from React-redux (react-redux is a the version of redux adapted to react). The provider contains all the states

this is why it should be at the highest way possible on your application.

SO it wraps the app.js.

```

import store from "./store";
import {Provider} from "react-redux";
export default function Index() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

```

# Redux functional components thunk
