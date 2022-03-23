import React from 'react';

const OrdersList = ({orders}) => {
    return (
        <div className="container px-4 px-lg-5 mt-5">
            <div className="py-5 text-center">
                <h2>Заказы:</h2>
            </div>
            { orders && (<div className="list-group" >
                {orders.map((item) => {
                    const {client, order, id, createdAt} = item;
                    return (
                        <div className="mt-5" style={{border: "1px solid black"}}>
                            <ul className="list-group list-group-horizontal mw-100" key={id}>
                                <li className="list-group-item">{new Date(createdAt).toLocaleDateString("ru-RU")}</li>
                                <li className="list-group-item w-100">
                                    <p>Имя клиента: {client.name + ' ' + client.surname}</p>
                                    <p>Телефон: {client.phone}</p>
                                    <p>Email: {client.email}</p>
                                    <p>Адрес: {`${client.zip} ${client.country} ${client.address}`}</p>
                                </li>
                            </ul>
                            <ul className="list-group">
                                {order.map(orderItem => (
                                    <li className="list-group-item">
                                        <p>Название: {orderItem.name}</p>
                                        <p>Цена: {orderItem.price}</p>
                                        <p>Колличество: {orderItem.quantity}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
                <hr className="my-4" />
            </div>)}
        </div>
    )
}

export default OrdersList;
