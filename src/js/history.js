
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

const history = syncHistoryWithStore(createBrowserHistory(), store);
export default history;