import React, {useContext, useState} from 'react';
import {Context} from '../index';
import {addOrder} from '../http/basketAPI';

const Basket = () => {
    const { basket } = useContext(Context);
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

    const clearForm = () => {
        setName('');
        setSurname('');
        setEmail('');
        setPhone('');
        setAddress('');
        setZip('');
        setCountry('');
    }

    const formSubmitHandler = async (ev) => {
        ev.preventDefault();

        const order = {
            client: {
                name,
                surname,
                phone,
                email,
                address,
                zip,
                country
            },
            order: basket.items
        }

        try {
            await addOrder(order);
            clearForm()

            setSubmitted(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <header className="bg-primary py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Форма заказа</h1>
                        { submitted ?
                            <div className="alert alert-success" role="alert">
                                Заказ отправлен! Благодарю за заказ!
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    {/*<div className="py-5 text-center">*/}
                    {/*    <h2>Форма заказа</h2>*/}

                    {/*</div>*/}

                    <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Корзина</span>
                            <span className="badge bg-primary rounded-pill">{basket.totalQuantity}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            { basket.items.map((item) => {
                                return (
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">{item.name}</h6>
                                            {/*<small className="text-muted">Brief description</small>*/}
                                        </div>
                                        <span className="text-muted">{item.quantity * item.price} руб.</span>
                                    </li>
                                )
                            })}
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Итого (РУБ)</strong>
                                <strong>{basket.totalPrice}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Информация о клиенте</h4>
                        <form className="needs-validation" onSubmit={formSubmitHandler}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Имя</label>
                                    <input type="text"
                                           className="form-control"
                                           id="firstName"
                                           placeholder="Иван"
                                           value={name}
                                           required
                                           onChange={(ev) => setName(ev.target.value)}
                                    />
                                    <div className="invalid-feedback">
                                        Имя обязательно
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Фамилия</label>
                                    <input type="text"
                                           className="form-control"
                                           id="lastName"
                                           placeholder="Иванов"
                                           value={surname}
                                           required
                                           onChange={(ev) => setSurname(ev.target.value)}
                                    />
                                    <div className="invalid-feedback">
                                        Фамилия обязательна
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input type="email"
                                           className="form-control"
                                           id="email"
                                           placeholder="you@example.com"
                                           required
                                           value={email}
                                           onChange={(ev) => setEmail(ev.target.value)}
                                    />
                                        <div className="invalid-feedback">
                                            Пожалуйста укажите адрес электронной почты
                                        </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="phone" className="form-label">
                                        Телефон
                                    </label>
                                    <input type="tel"
                                           className="form-control"
                                           // pattern="7 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
                                           id="phone"
                                           placeholder="+7 999 999 99 99"
                                           required
                                           value={phone}
                                           onChange={(ev) => setPhone(ev.target.value)}

                                    />
                                        <div className="invalid-feedback">
                                            Пожалуйста укажите телефон для связи
                                        </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Адрес доставки</label>
                                    <input type="text"
                                           className="form-control"
                                           id="address"
                                           required
                                           value={address}
                                           onChange={(ev) => setAddress(ev.target.value)}
                                    />
                                        <div className="invalid-feedback">
                                            Пожалуйста укажите адрес доставки
                                        </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Страна</label>
                                    <select className="form-select"
                                            id="country"
                                            required
                                            value={country}
                                            onChange={(ev) => setCountry(ev.target.value)}
                                    >
                                        <option value="">Выберите...</option>
                                        <option value="russia">Россия</option>
                                        <option value="belorus">Белоруссия</option>
                                        <option value="kazakhstan">Казахстан</option>
                                        <option value="tadjikistan">Таджикистан</option>
                                        <option value="uzbekistan">Узбекистан</option>
                                        <option value="ukraina">Украина</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Пожалуйста укажите страну.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="zip" className="form-label">Индекс</label>
                                    <input type="text"
                                           className="form-control"
                                           id="zip"
                                           placeholder="101001"
                                           required
                                           value={zip}
                                           onChange={(ev) => setZip(ev.target.value)}
                                    />
                                    <div className="invalid-feedback">
                                        Индекс обязателен.
                                    </div>
                                </div>
                            </div>


                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">
                                Подтвердить заказ
                            </button>
                        </form>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default Basket;
