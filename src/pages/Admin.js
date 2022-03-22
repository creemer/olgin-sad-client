import React, {useState, useEffect} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateFlower from "../components/modals/CreateFlower";
import {getOrders} from '../http/basketAPI';
import OrdersList from '../components/OrdersList';

const Admin = () => {
    const [flowerAdd, setFlowerAdd] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders().then((data) => setOrders(data));
    }, []);

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setFlowerAdd(true)}
            >
                Добавить Цветок
            </Button>
            <OrdersList orders={orders}/>
            <CreateFlower show={flowerAdd} onHide={() => setFlowerAdd(false)}/>
        </Container>
    );
};

export default Admin;
