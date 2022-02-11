import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// import App from './2_react-router/Link/App';
// import App from './2_react-router/NavLink/App';
// import App from './2_react-router/Switch/App';
// import App from './2_react-router/Redirect/App';
// import App from './2_react-router/路由嵌套/App';
// import App from './2_react-router/手动路由跳转/路由跳转组件/App';
// import App from './2_react-router/手动路由跳转/普通渲染组件/App';
// import App from './2_react-router/参数传递/动态路由/App';
// import App from './2_react-router/参数传递/search/App';
// import App from './2_react-router/参数传递/link_to/App';
import App from './3_react-router-config/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
