
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { store } from './store/store.js';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Analytics />
    <App />
  </Provider>,
)
