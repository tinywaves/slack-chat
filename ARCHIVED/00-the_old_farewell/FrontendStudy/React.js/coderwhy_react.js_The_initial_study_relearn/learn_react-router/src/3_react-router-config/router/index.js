import { Home, About, One, Two, Three } from '../App';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about',
        component: One,
        exact: true
      },
      {
        path: '/about/about1',
        component: Two
      },
      {
        path: '/about/about2',
        component: Three
      }
    ]
  }
];

export default routes;
