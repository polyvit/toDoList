import React from 'react';
import './scss/style.scss';
import {Switch, Route} from "react-router-dom";
import Home from "pages/Home/Home";

function App() {
    return (
        <main>
            <Switch>
                <Route  path="/" exact render={() => <Home/>} />
            </Switch>
        </main>
    );
}

export default App;