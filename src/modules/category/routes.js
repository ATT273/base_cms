import Loadable from 'react-loadable';
import LoadingComponent from '../../common/loader/index';

export default [
    {
        path: '/category',
        exact: true,
        auth: true,
        component: Loadable({
            loader: () => import('./index'),
            loading: LoadingComponent
        })
    }, 
];