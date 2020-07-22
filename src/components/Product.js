import React, { useContext } from 'react';
import './style/product.css';
import { AppContext } from './AppProvider';

function Product({ id, title, image, price, reting }) {
    const context = useContext(AppContext);
    const { incart, setIncart } = context;

    const setIncartclick = (id, title, image, price, reting) => {

        let cloneincart = [...incart];
        let currentdata = { id: id, title, image: image, price: price, reting: reting };
        if (cloneincart.length > 0) {
            let check = false;
            cloneincart.map(item => {
                if (item.id === id) {
                    check = true;
                }
            })
            if (!check) {
                cloneincart.push(currentdata);
            }
        } else {
            cloneincart.push(currentdata);
        }
        setIncart(cloneincart);
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(reting).fill().map((_, index) => (
                            <span key={index} role="img" aria-label="">🌟</span>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={() => setIncartclick(id, title, image, price, reting)}>Add to basket</button>
        </div>
    )
}

export default Product
