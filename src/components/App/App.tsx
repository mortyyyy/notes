import * as React from 'react';
import { Routing, routes } from '../Routing';
import { LanguageSwitcher } from '../languageSwitcher';

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <LanguageSwitcher />
          </div>
          <div className="col-10">
            <Routing routes={routes}></Routing>
          </div>
        </div>
      </div>
    );
  }
}
