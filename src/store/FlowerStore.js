import {makeAutoObservable} from "mobx";

export default class FlowerStore {
    constructor() {
        this._flowers = [];
        this._totalCount = 0;
        makeAutoObservable(this)
    }

    setFlowers(flowers) {
        this._flowers = flowers
    }

    setTotalCount(count) {
        this._totalCount = count;
    }

    get flowers() {
        return this._flowers
    }

    get totalCount() {
        return this._totalCount;
    }
}
