import Admin from "./pages/Admin";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BASKET_ROUTE,
    FLOWER_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    ROOT_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import FlowerPage from "./pages/FlowerPage";
import Main from './pages/Main';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: ROOT_ROUTE,
        Component: Shop
    },
    {
        path: ABOUT_ROUTE,
        Component: Main
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: FLOWER_ROUTE + '/:id',
        Component: FlowerPage
    },
]
