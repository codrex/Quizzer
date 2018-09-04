import Loadable from 'react-loadable';
import Loading from '../components/screens/Loading';


export const Categories = Loadable({
  loader: () => import('../components/screens/Categories'),
  loading: Loading,
});

export const End = Loadable({
  loader: () => import('../components/screens/End'),
  loading: Loading,
});

export const Questions = Loadable({
  loader: () => import('../components/screens/Question'),
  loading: Loading,
});

export const Start = Loadable({
  loader: () => import('../components/screens/Start'),
  loading: Loading,
});
