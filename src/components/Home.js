import React, { useContext } from 'react';
import './style/home.css';
import Product from './Product';
import { AppContext } from './AppProvider';

function Home() {
    const context = useContext(AppContext);
    const { listData } = context;
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="" />

            <div className="home__row">
                {
                    listData?.map((item, index) => {
                        if(index < 2 ){
                            return (
                                <Product
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    reting={item.reting}
                                    image={item.image}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className="home__row">
            {
                    listData?.map((item, index) => {
                        if(index > 1  && index < 5){
                            return (
                                <Product
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    reting={item.reting}
                                    image={item.image}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className="home__row">
            {
                    listData?.map((item, index) => {
                        if(index > 4){
                            return (
                                <Product
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    reting={item.reting}
                                    image={item.image}
                                />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Home
