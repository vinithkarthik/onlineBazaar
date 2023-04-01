import Grid from '@mui/material/Grid';
import { useEffect, useState, useContext } from 'react';
import ProductCard from '../Common/ProductCard';
import { req } from '../../Util/util';
import { domain } from '../../Constants';
import Filter from '../Common/Filter';
import SelectBox from '../Common/SelectBox';
import { productContext } from '../../Contexts/ProductContext';
import constants from './Constants';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [category, setCategory] = useState([]);
    const [filteredProductData, setFilteredProductData] = useState([]);
    const { productData, dispatchProductData } = useContext(productContext);


    useEffect(() => {
        const getCategory = async () => {
            try {
                let response = await req({ url: `${domain}api/server/categories/index.get.json`, method: 'get' });
                let category = response.data;
                setCategory(category);
                getProducts();
            } catch {

            }
        }
        getCategory();
        const getProducts = async () => {
            try {
                let response = await req({ url: `${domain}api/server/products/index.get.json`, method: 'get' });
                let productList = response.data;
                setProductList(productList);
                setFilteredProductData(productList)
            } catch {

            }
        }
    }, [])

    const onCategoryChange = (id) => {
        let filteredData = []
        if (id) {
            filteredData = productList.filter(data => data.category == id);
        } else {
            filteredData = [...productList]
        }
        setFilteredProductData(filteredData);
    }

    const onAddToCart = async (selectedItem) => {
        try {
            let response = await req({ url: `${domain}api/server/addToCart/index.post.json` });
            if (response.data && response.data.response == "Success") {
                let updatedCartData = { ...productData.addedProducts };
                if (updatedCartData[selectedItem.id]) {
                    updatedCartData[selectedItem.id].quantity = updatedCartData[selectedItem.id].quantity + 1;
                } else {
                    selectedItem.quantity = 1;
                    updatedCartData[selectedItem.id] = selectedItem;
                }
                dispatchProductData({ type: constants.UPDATE_TOTAL_PRODUCTS, totalProducts: productData.totalProducts + 1 })
                dispatchProductData({ type: constants.UPDATE_ADDED_PRODUCT, addedProducts: updatedCartData });
            }
        } catch {

        }
    }

    return (
        <Grid container>
            <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Filter
                    list={category}
                    onFilterChange={onCategoryChange}
                />
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' } }}>
                <SelectBox
                    list={category}
                    onChange={onCategoryChange}
                    customClass={'category-select'}
                />
            </Grid>
            <Grid item xs={12} sm={10}>
                <Grid container spacing={2}>
                    {
                        filteredProductData.map(productEntry => {
                            return (
                                <Grid item md={3} sm={6} xs={12} key={productEntry.id}>
                                    <ProductCard {...productEntry} onClick={onAddToCart} />
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Grid>
        </Grid>

    );
}

export default Products;