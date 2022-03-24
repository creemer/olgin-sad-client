import React, {useContext, useEffect, useState} from 'react';
import classNames from 'classnames';
import FlowersList from "../components/FlowersList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchFlowers} from "../http/flowerAPI";
import {FLOWER_CATEGORIES} from '../utils/consts';

const Shop = observer(() => {
    const {flower} = useContext(Context)
    const [activeTab, setActiveTab] = useState('all')

    useEffect(() => {
        fetchFlowers(activeTab).then(data => {
            flower.setFlowers(data);
            flower.setTotalCount(data.length);
        })
    }, [activeTab])

    const getCategories = () => {
        const categories = [
            {
                key: 'all',
                readable: 'Все'
            },
            ...Object.values(FLOWER_CATEGORIES)
        ];

        return categories.map(category => (
            <li className="nav-item" style={{cursor: "pointer"}} onClick={() => setActiveTab(category.key)}>
                <p className={classNames("nav-link", activeTab === category.key ? 'active': '')}>
                    {category.readable}
                </p>
            </li>
        ))
    }

    return (
        <>
            <header className="bg-primary py-5">
                <div className="container px-4 px-lg-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Наши гортензии</h1>
                        <p className="lead fw-normal text-white-50 mb-0">
                            Здесь Вы можете посмотреть, выбрать и купить растения которые Вам понравятся.
                        </p>
                        <p className="lead fw-normal text-white-50 mb-0">
                            Наслаждайтесь их красотой и преобретайте!
                        </p>
                        <p className="lead fw-normal text-white-50 mb-0">
                            Не стестяйтесь!
                        </p>
                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 justify-content-center d-flex">
                    <ul className="nav nav-tabs">
                        { getCategories() }
                    </ul>
                </div>
                <div className="container px-4 px-lg-5 mt-5">
                    <FlowersList/>
                </div>
            </section>
        </>
    );
});

export default Shop;
