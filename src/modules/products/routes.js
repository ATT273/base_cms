import Loadable from 'react-loadable';
import LoadingComponent from '../../common/loader/index';

export default [
    {
        path: '/products',
        exact: true,
        auth: true,
        component: Loadable({
            loader: () => import('./index'),
            loading: LoadingComponent
        })
    }, 
];