import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"

import BadgePageNew from "../../pages/BadgeNew";
import BadgesHome from "../../pages/Bageshome";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={BadgesHome}></Route>
                <Route exact path="/badges/new" component={BadgePageNew}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;