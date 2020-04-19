import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import App from 'App';
import * as serviceWorker from 'serviceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from 'store/reducers';
import thunk from 'redux-thunk';

// Intl
import { IntlProvider } from 'react-intl';
import translations_fr from 'translations/translations_fr.json';
import translations_en from 'translations/translations_en.json';

const messages = {
  fr: translations_fr,
  en: translations_en
};

const language = navigator.language.split('-')[0] || 'en';

/* --- Redux --- */
const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
