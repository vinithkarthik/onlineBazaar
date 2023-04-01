import Grid from '@mui/material/Grid';
import ButtonComp from "./ButtonComp";
import { domain } from '../../Constants';

/**
 * ProductCard
 * A reusable component for displaying Product as a card
 * 
 * Props
 * @param {string} id - id of the product
 * @param {string} name - name of the product
 * @param {string} imageURL - image url of the product
 * @param {string} description - description of the product
 * @param {Number} currentPage - current selected page
 * @param {Function} onClick - callback function called on clicking the 'buy' button
 * 
 * Examples
 * <ProductCard id={"shirt"} name={"Shirt"} imageURL={"./image.png"} description={"cotton shirt"} price={23} onClick={onClick} />
 */
const ProductCard = ({ id, name, imageURL, description, price, onClick }) => {

    const onBuy = () => {
        onClick({ id, name, description, price, imageURL });
    }

    return (
        <Grid container className='productcard-container'>
            <Grid item md={12} sm={12} xs={12} sx={{ height: { xs: '8vh' } }}>
                <b>{name}</b>
            </Grid>
            <Grid item md={12} sm={6} xs={6} sx={{ height: { md: '25vh', sm: '34vh', xs: '40vh' }, width: { xs: '20vh' } }}>
                <img className='product-list-img' src={`${domain}api${imageURL}`} alt={name} role="button"></img>
            </Grid>
            <Grid item sx={{ display: { xs: 'block', sm: 'none' } }} xs={6}>
                <Grid container>
                    <Grid item xs={12} sx={{ height: { xs: '30vh' }, overflow: 'hidden' }}>
                        {description}
                    </Grid>
                    <Grid item xs={12} sx={{ height: { xs: '10vh' } }}>
                        <span>MRP Rs.</span><span>{price}</span>
                        <ButtonComp onClick={onBuy} variant="contained">Buy Now</ButtonComp>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' }, overflow: 'hidden', height: { md: '9vh', sm: '34vh' } }}>
                {description}
            </Grid>
            <Grid item md={12} sm={12} sx={{ display: { xs: 'none', sm: 'block' }, height: { md: '8vh' } }}>
                <span>MRP Rs.</span><span>{price}</span>
                <ButtonComp onClick={onBuy} variant="contained">Buy Now</ButtonComp>
            </Grid>
        </Grid>
    );
}

export default ProductCard;
