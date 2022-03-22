import {makeAutoObservable} from 'mobx';

export default class BasketStore {
    constructor() {
        this._basket = []

        makeAutoObservable(this)
    }

    addToBasket(item) {
        const inBasketItem = this._basket.find((inBasketItem) => inBasketItem.id === item.id);
        if (!inBasketItem) {
            this._basket.push(item);
        } else {
            this._basket = [
                ...this._basket.filter((inBasketItem) => inBasketItem.id !== item.id),
                {
                    ...item,
                    quantity: inBasketItem.quantity + item.quantity
                }
            ]
        }
    }

    get totalQuantity() {
        return this._basket.length;
    }

    get totalPrice() {
        return this._basket.reduce((acc, item) => acc += Number(item.price) * Number(item.quantity), 0)
    }

    get items() {
        return this._basket;
    }
}
