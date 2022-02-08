import React from 'react';
import ReactDOM from 'react-dom';
// import { StoreContext } from './04_context处理store/utils/context'
import { Provider } from 'react-redux';

// import App from './02_redux_in_react/App'
// import App from './03_自定义connect函数/App'
// import store from './04_context处理store/store/index'
// import App from './04_context处理store/App'
// import store from './05_react-redux/store/index'
// import App from './05_react-redux/App'
// import store from './06_组件中的异步操作/store/index'
// import App from './06_组件中的异步操作/App'
// import store from './07_redux-thunk/store/index'
// import App from './07_redux-thunk/App'
// import store from './08_redux-saga/store/index'
// import App from './08_redux-saga/App'
import store from './12_reducer文件的拆分/store';
import App from './12_reducer文件的拆分/App.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
