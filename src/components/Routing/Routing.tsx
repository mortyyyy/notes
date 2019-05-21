import * as React from 'react';
import { Switch, Route } from 'react-router';
import { RouteProps } from 'react-router';


export interface IRouting {
    routes: RouteProps[];
}

export const Routing: React.FC<IRouting> = ({ routes }) => (
    <Switch>
        {routes.map((props) => <Route {...props} />)}
    </Switch>
);
