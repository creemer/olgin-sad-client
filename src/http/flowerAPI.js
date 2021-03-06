import {$authHost, $host} from "./index";

export const createFlower = async (flower) => {
    const {data} = await $authHost.post('api/flowers', flower)
    return data
}

export const fetchFlowers = async (category) => {
    const {data} = await $host.get(`api/flowers?category=${category}`)
    return data
}

export const fetchOneFlower = async (id) => {
    const {data} = await $host.get('api/flowers/' + id)
    return data
}
