import {$authHost, $host} from './index';

export const addOrder = async (order) => {
    const {data} = await $host.post('api/order/addOrder', order)
    return data
}

export const getOrders = async () => {
    const {data} = await $authHost.get('api/order')
    return data
}
