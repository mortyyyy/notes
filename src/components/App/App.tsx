import * as React from 'react';
import { Routing, routes } from '../Routing';

export class App extends React.Component {
  render() {
    return (
      <>
        <Routing routes={routes}></Routing>
      </>
    );
  }
}
