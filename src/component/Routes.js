import React from 'react'
import { Route, Switch } from "react-router-dom";

import DogList from './DogList';
import DogDetails from './DogDetails';

const Routes = ({ dogs }) => {
    return (

        <Switch>

            <Route exact path="/dogs" >
                <DogList dogs={dogs} />
            </Route>
            <Route path="/dogs/:name" >
                <DogDetails dogs={dogs} />
            </Route>


        </Switch>

    )
}

export default Routes
