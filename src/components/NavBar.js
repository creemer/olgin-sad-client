import React, {useContext} from 'react';
import {Context} from "../index";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, ROOT_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'
const NavBar = observer(() => {
    const {user, basket} = useContext(Context);
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <NavLink  className="navbar-brand" to={SHOP_ROUTE}>Ольгин Сад Гортензий</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Nav.Link onClick={() => history.push(ROOT_ROUTE)} >Главная</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link onClick={() => history.push(SHOP_ROUTE)}>Каталог</Nav.Link>
                        </li>
                        {user.isAuth ?
                            <>
                                <li className="nav-item">
                                    <Nav.Link onClick={() => history.push(ADMIN_ROUTE)}>Админ панель</Nav.Link>
                                </li>
                                <li className="nav-item">
                                    <Nav.Link href='#' onClick={() => logOut()}>Выйти</Nav.Link>
                                </li>
                            </>
                            :
                            null
                        }
                    </ul>
                    <button className="btn btn-outline-dark" onClick={() => history.push(BASKET_ROUTE)}>
                        <i className="bi-cart-fill me-1"></i>
                        Корзина
                        <span className="badge bg-primary text-white ms-1 rounded-pill">{basket.totalQuantity}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
});

export default NavBar;
