import React from 'react';
import {useHistory} from "react-router-dom"
import {FLOWER_ROUTE} from "../utils/consts";

const FlowerItem = ({flower}) => {
    const history = useHistory()

    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/*Sale badge*/}
                { flower.sale ?
                    <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    :
                    null
                }
                {/*Product Image*/}
                <img className="card-img-top" src={flower.img} alt="flower"/>
                {/*Product details*/}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/*Product name*/}
                        <h5 className="fw-bolder">{flower.name}</h5>
                        {/*Product price*/}
                        { flower.sale ?
                            <span className="text-muted text-decoration-line-through">{flower.preSalePrice} руб.</span>
                            :
                            null
                        }
                        {flower.price} руб.
                    </div>
                </div>
                {/*Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a className="btn btn-primary mt-auto"
                           href="#"
                           onClick={() => history.push(FLOWER_ROUTE + '/' + flower.id)}
                        >
                            Подробнее
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlowerItem;
