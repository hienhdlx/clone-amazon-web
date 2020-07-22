import React, { useContext } from 'react';
import './style/checkout.css';
import { AppContext } from './AppProvider';

function Checkout() {
    const context = useContext(AppContext);
    const { incart, setIncart } = context;

    //count total in cart
    let count = 0;
    incart.map(item => {
        count += item.price;
    })

    const Removeincart = (data) => {
        let newincart = [...incart];
        newincart =  newincart.filter(item => {
            return item.id !== data.id
        })
        setIncart(newincart)
    }

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__title">
                    <h2>Shopping Cart</h2>
                </div>

                {
                    incart?.map((item, index) => (
                        <div key={index} className="checkout__listProduct">
                            <img className="checkout__image" src={item.image} alt="" />
                            <div className="checkoutProduct__info">
                                <p className="checkoutProduct__title">{item.title}</p>
                                <p className="checkoutProduct__price">
                                    <small>$</small>
                                    <strong>{item.price}</strong>
                                </p>
                                <p className="checkoutProduct__rating">
                                    {
                                        Array(item.reting).fill().map((_) => (
                                            <span role="img" aria-label="">🌟</span>
                                        ))
                                    }
                                </p>

                                <button onClick={ () => Removeincart(item)}>Remove from Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="checkout__right">
                <div className="subtotal">
                    <p>Subtotal ({incart.length} items):
            <strong>${count}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                    <button>Process to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout