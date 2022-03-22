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
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <FlowersList/>
            </div>
        </section>
    );
});

export default Shop;
