import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import FlowerItem from "./FlowerItem";

const FlowersList = observer(() => {
    const {flower} = useContext(Context)

    console.log(flower.flowers)
    return (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {flower.flowers.map(flower =>
                <FlowerItem key={flower.id} flower={flower}/>
            )}
        </div>
    );
});

export default FlowersList;
