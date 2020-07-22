import React, {createContext, useState, useMemo} from 'react';

export const AppContext = createContext();

const initialState = [
    {
        id: "1",
        title :"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        price: 11.65,
        reting: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    },
    {
        id: "2",
        title :"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
        price: 13.65,
        reting: 2,
        image: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
    },
    {
        id: "3",
        title :"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        price: 15.65,
        reting: 3,
        image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    },
    {
        id: "4",
        title :"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
        price: 13.65,
        reting: 3,
        image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
    },
    {
        id: "5",
        title :"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
        price: 13.65,
        reting: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
    },
    {
        id: "6",
        title :"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price: 6.65,
        reting: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
    }
]
const AppProvider = (props) => {
    const [user, setUser] = useState('');
    const [listData, setlistData] = useState(initialState);
    const [incart, setIncart] = useState([]);

    const contextData = useMemo(() =>({
        user,
        listData,
        incart,
        setIncart: (num) => {
            setIncart(num);
        },
        setUser: (name ) => {
            setUser(name)
        },
        setlistData: (data) => {
            setlistData(...listData, data);
        }
    }), [user, listData, incart])
    return (
        <AppContext.Provider value={contextData}>
            {props.children}
        </AppContext.Provider>
    );
}


export default AppProvider;
