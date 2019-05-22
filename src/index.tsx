import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import stores from './stores';
import { App } from './components/App';
import { Router } from 'react-router';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import 'bootstrap/scss/bootstrap.scss';


const browserHistory = createBrowserHistory({basename: '/#'});

const history = syncHistoryWithStore(browserHistory, stores.routing);

const AppContent: React.FC = () => (
  <Provider {...stores}>
    <Router history={history}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Router>
  </Provider>
);


ReactDOM.render(
  <AppContent />,
  document.getElementById('app')
);