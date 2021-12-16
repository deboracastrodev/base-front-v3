import BasePage from '../pages/Base/BasePage.vue';
import Home from '../pages/Home/Home.vue';

const routes: any = [
  {
    path: '/',
    component: BasePage,
    props: (route) => ({ query: route.query }),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  }
];

export default routes;
