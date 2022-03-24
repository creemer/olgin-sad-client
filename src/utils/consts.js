export const ADMIN_ROUTE = '/admin'
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
export const ABOUT_ROUTE = '/about'
export const ROOT_ROUTE = '/'
export const SHOP_ROUTE = ROOT_ROUTE
export const BASKET_ROUTE = '/basket'
export const FLOWER_ROUTE = '/flower'
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/'

export const FLOWER_CATEGORIES = {
    metel: {
        key: 'metel',
        readable: 'Метельчатые'
    },
    krupnoList: {
        key: 'bigList',
        readable: 'Крупнолистовые'
    },
    tree: {
        key: 'tree',
        readable: 'Древовидные'
    }
}
