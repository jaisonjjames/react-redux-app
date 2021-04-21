import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { selectedProduct, removeSelectedProduct, addToCart } from '../redux/actions/productActions';
import { Col, Row, Image, Typography, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Paragraph, Text, Title, ellipsis, Link } = Typography;

const url = "https://fakestoreapi.com/products/"

const ProductDetails =  (props) => {
    const product = useSelector(state => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();

    console.log(productId);
    console.log(product);

    const fetchProduct = async() => {
        const response = await axios.get(url+productId).catch((err) => {
            console.log('Error for product fetching ', err);
        });

        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        if(productId && productId !== "") fetchProduct();

        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    const handleAddToCart = () => {
        console.log("Trigger");
        dispatch(addToCart(product))
    }

    if(Object.keys(product).length === 0){
        return (<div>Fetching product details...</div>)
    }

    return (
        <Row gutter={[30, 0]}>
            <Col span={12}>
                <Image width={"100%"} src={image} />
            </Col>
            <Col span={12}>
                <Title level={2}>
                    {title}
                </Title>
                <Link>
                    {category}
                </Link>
                <Paragraph ellipsis={ellipsis}>
                    {description}
                </Paragraph>
                <Text><strong>Price: ${price}</strong></Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" icon={<ShoppingCartOutlined />} onClick={() => handleAddToCart()}>
                    Add To Cart
                </Button>
            </Col>
        </Row>
    )
}

export default ProductDetails;
