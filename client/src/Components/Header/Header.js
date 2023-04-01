import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useState } from 'react';
import { productContext } from '../../Contexts/ProductContext';
import CartDialog from '../CartDialog/CartDialog';
import constants from '../Products/Constants';
import { domain } from '../../Constants';
import { Link } from 'react-router-dom';

const Header = () => {
    const { productData, dispatchProductData } = useContext(productContext);
    const [isCartOpen, toggleIsOpencart] = useState(false);


    const openCartDialog = () => {
        toggleIsOpencart(true);
    }

    const handleClose = () => {
        toggleIsOpencart(false);
    };

    const updateList = (list, totalProducts) => {
        dispatchProductData({ type: constants.UPDATE_TOTAL_PRODUCTS, totalProducts: totalProducts })
        dispatchProductData({ type: constants.UPDATE_ADDED_PRODUCT, addedProducts: list });
    }

    const register = () => {

    }

    return (
        <header>
            <Grid container>
                <Grid item md={2}>
                    <picture>
                        <source media="(min-width:650px)" srcSet={`${domain}api/static/images/logo.png`}></source>
                        <source media="(min-width:465px)" srcSet={`${domain}api/static/images/logo.png`}></source>
                        <img className='logo' src={`${domain}api/static/images/logo.png`} alt="home page" role="button"></img>
                    </picture>
                </Grid>
                <Grid item md={8}>
                    <nav aria-label='main navigation'>
                        <ul className='main-nav'>
                            <li>
                                <a href='/home'>Home</a>
                            </li>
                            <li>
                                <a href='/products'>Products</a>
                            </li>
                        </ul>
                    </nav>
                </Grid>
                <Grid className='login-btn' item md={2}>
                    <Link to="/signin">SignIn</Link>
                    <Link to="/register">Register</Link>
                    <Grid tabIndex={'0'} container className='cart-button' onClick={openCartDialog} >
                        <ShoppingCartIcon />
                        <span>{productData.totalProducts}</span><span>&nbsp;items</span>
                    </Grid>
                </Grid>
            </Grid>
            <CartDialog
                list={productData.addedProducts}
                open={isCartOpen}
                totalItems={productData.totalProducts}
                handleClose={handleClose}
                updateList={updateList}
            />
        </header>
    );
}

export default Header;