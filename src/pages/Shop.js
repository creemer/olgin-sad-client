import React, {useContext, useEffect} from 'react';
import FlowersList from "../components/FlowersList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchFlowers} from "../http/flowerAPI";

const Shop = observer(() => {
    const {flower} = useContext(Context)

    useEffect(() => {
        fetchFlowers().then(data => {
            flower.setFlowers(data);
            flower.setTotalCount(data.length);
        })
    }, [])

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
                <div className="container px-4 px-lg-5 mt-5">
                    <FlowersList/>
                </div>
            </section>
        </>
    );
});

export default Shop;
