import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { PageHeader, List, Avatar, Popover, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { removeFromCart } from '../redux/actions/productActions';

export default function AppHeader() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const title = (<h2><Link to="/">My Shop</Link></h2>);

    const handleCartItemRemove = (item) => {
        dispatch(removeFromCart(item));
    }

    const content = (
        <div style={{width:'450px'}}>
            <List
                itemLayout="horizontal"
                dataSource={cart}
                renderItem={item => (
                    <List.Item actions={[<Link onClick={() => handleCartItemRemove(item)}>Remove</Link>]}>
                        <List.Item.Meta
                        avatar={<Avatar src={item.image} />}
                        title={<Link to={`/product/${item.id}`}>{item.title}</Link>}
                        description={false}
                        />
                    </List.Item>
                )}
            />
        </div>
      );
    const extra = (
        <Popover content={content} title={<strong>Cart</strong>} placement="leftBottom" trigger="click">
            <Badge count={cart?.length}>
                <ShoppingCartOutlined />
            </Badge>
        </Popover>
    );

    return (
        <PageHeader
            ghost={false}
            onBack={false}
            title={title}
            subTitle="Live Simply!"
            extra={extra} 
        />
    )
}
