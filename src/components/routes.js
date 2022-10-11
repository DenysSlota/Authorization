import { LOGIN_ROUTE, HOME_ROUTE, CATALOG_ROUTE } from "../utils/constans";
import Home from './Home';
import Login from './Login';
import Catalog from './Catalog';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Element: Login
    },
    {
        path: HOME_ROUTE,
        Element: Home
    }
]

export const privateRoutes = [
    {
        path: CATALOG_ROUTE,
        Element: Catalog
    },
    {
        path: HOME_ROUTE,
        Element: Home
    }
]