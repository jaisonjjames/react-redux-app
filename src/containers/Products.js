import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { Col, Row } from 'antd';

const api = "https://fakestoreapi.com/products";

function Products() {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

        const response = await axios.get(api).catch((error) => console.log(error));

        dispatch(setProducts(response.data));
    }

    return (
        <div className="">
            <Row gutter={[24, 24]} className="products">
                {products?.map((obj, i) => <Product key={i} data={obj} />)}
            </Row>
        </div>
    )
}

export default Products
