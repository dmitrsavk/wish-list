/*jshint esversion: 6 */

import express from 'express';
import React from 'react';
import App from 'components/App';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routes from './routes';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import {
    fetch,
    authenticateStart,
    authenticateComplete,
    authenticateError,
    parseResponse
} from 'redux-oauth';

const log = require('./libs/log')(module);
const api = require('./api');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user', api.user.router);

app.use((req, res) => {
    const store = configureStore();
    const context = {};

    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                {routes}
            </StaticRouter>
        </Provider>
    );

    res.status(200).send(renderHTML(html));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Wish List</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  log.info(`Server listening on: ${PORT}`);
});
