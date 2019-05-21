import * as React from 'react';
import { Routing, routes } from '../Routing';
export class App extends React.Component {
  render() {

    return (
      <>
        <span>Current pathname</span>
        <Routing routes={routes}></Routing>
      </>
    );
  }
}
