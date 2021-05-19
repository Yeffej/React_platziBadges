import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

import BadgePageNew from "../../pages/BadgeNew";
import BadgePageEdit from "../../pages/BadgeEdit";
import BadgesHome from "../../pages/Bageshome";
import Layout from "../Layout";
import Home from "../home";
import NotFound from "../../pages/NotFound";
import BadgeDetailsContainer from "../../pages/Logic/BadgeDetailsContainer";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={BadgesHome}></Route>
                    <Route exact path="/badges/new" component={BadgePageNew}></Route>
                    <Route exact path="/badges/:badgesId/edit" component={BadgePageEdit} />
                    <Route exact path="/badges/:badgesId" component={BadgeDetailsContainer} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404"/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;