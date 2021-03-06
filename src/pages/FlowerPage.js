import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {fetchOneFlower} from "../http/flowerAPI";
import {Context} from '../index';

const FlowerPage = () => {
    const {basket} = useContext(Context);
    const [addedToBasket, setAddedToBasket] = useState(false)
    const [flower, setFlower] = useState({})
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams()

    useEffect(() => {
        fetchOneFlower(id).then(data => setFlower(data))
    }, [])

    const quantityChangeHandler = (ev) => {
        setQuantity(ev.target.value)
    }

    const addToCartHandler = (ev) => {
        basket.addToBasket({
            quantity: Number(quantity),
            ...flower
        })

        setAddedToBasket(true);

        setTimeout(() => setAddedToBasket(false), 5000);
    }

    return (

            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <img className="card-img-top mb-5 mb-md-0"
                                 src={flower.img}
                                 alt="..."
                            />
                        </div>
                        <div className="col-md-6">
                            {/*<div className="small mb-1">SKU: BST-498</div>*/}
                            <h1 className="display-5 fw-bolder">{flower.name}</h1>
                            <div className="fs-5 mb-5">
                                { flower.sale ?
                                    <span className="text-decoration-line-through">{flower.preSalePrice} руб</span>
                                    :
                                    null
                                }
                                <span>{flower.price} руб.</span>
                            </div>
                            <p className="lead">{flower.description}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3"
                                       id="inputQuantity"
                                       type="num"
                                       value={quantity}
                                       style={{maxWidth: '3rem'}}
                                       onChange={quantityChangeHandler}
                                />
                                <button className="btn btn-primary flex-shrink-0"
                                        type="button"
                                        onClick={addToCartHandler}
                                >
                                    <i className="bi-cart-fill me-1"></i>
                                    Добавить в корзину
                                </button>
                            </div>
                            <div className="py-5 text-center mh-100">
                                { addedToBasket ?
                                    <div className="alert alert-success" role="alert">
                                        Товар добавлен в корзину.
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default FlowerPage;
