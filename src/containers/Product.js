import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Tag } from 'antd';
const { Meta } = Card;

const Product =  (props) => {
    const { data } = props;
    const { id, title, image, price, category } = data;

    const desc = (category, price) => (<><div className="category">{category}</div><Tag color="#108ee9">${price}</Tag></>);

    return (
        <Col span={6} className="product">
            <Link to={`/product/${id}`}>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt={title} src={image} />}
                >
                    <Meta title={title} description={desc(category, price)} />
                </Card>
            </Link>
        </Col>
    )
}

export default Product
