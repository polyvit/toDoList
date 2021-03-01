import React from 'react';
import './scss/style.scss';
import {Switch, Route} from "react-router-dom";
import List from "../src/Main/List/List";

function App() {
    return (
        <main>
            <Switch>
                <Route  path="/" exact render={() => <List/>} />
            </Switch>
        </main>
    );
}

export default App;