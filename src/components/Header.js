import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './style/header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { AppContext } from './AppProvider';


function Header() {

    const context = useContext(AppContext);
    const { user, incart, setUser } = context;

    const SignOut = () => {
        setUser('');
    }
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="./image/amazonimage.png" alt="" />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">{user === '' ? 'Hello' : user}</span>
                        <span className="header__optionLineTwo">{user === '' ? <span>& Sign In</span> : <span onClick={SignOut}>& Sign Out</span>}</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">& Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{incart.length === 0 ? 0 : incart.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
