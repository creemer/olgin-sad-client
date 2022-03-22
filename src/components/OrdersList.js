import React from 'react';

const OrdersList = ({orders}) => {
    return (
        <div className="container px-4 px-lg-5 mt-5">
            <div className="py-5 text-center">
                <h2>Заказы:</h2>
            </div>
            { orders && (<div className="list-group">
                {orders.map((item) => {
                    const {client, order, id, createdAt} = item;
                    return (
                        <ul className="list-group list-group-horizontal" key={id}>
                            <li className="list-group-item">{new Date(createdAt).toLocaleDateString("ru-RU")}</li>
                            <li className="list-group-item">
                                <p>Имя клиента: {client.name + ' ' + client.surname}</p>
                                <p>Телефон: {client.phone}</p>
                                <p>Email: {client.email}</p>
                                <p>Адрес: {`${client.zip} ${client.country} ${client.address}`}</p>
                            </li>
                            <li className="list-group-item">
                                {order.map(orderItem => (
                                    <>
                                        <p>Название: {orderItem.name}</p>
                                        <p>Цена: {orderItem.price}</p>
                                        <p>Колличество: {orderItem.quantity}</p>

                                        <hr className="my-4" />
                                    </>
                                ))}
                            </li>
                        </ul>
                    )
                })}
            </div>)}
        </div>
    )
}

export default OrdersList;
