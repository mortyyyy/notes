import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import stores from './stores';
import { App } from './components/App';
import { Router } from 'react-router';

import 'bootstrap/scss/bootstrap.scss';


const browserHistory = createBrowserHistory();

const history = syncHistoryWithStore(browserHistory, stores.routing);

const AppContent: React.FC = () => (
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);


ReactDOM.render(
  <AppContent />,
  document.getElementById('app')
);