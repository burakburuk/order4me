import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { toPrice } from './../../utils/price';
import * as Styled from './style';

const BasketOverview = ({ totalAmount = 0 }) => (
    <Styled.BasketWrapper>
        <Link to={'/basket'}>
            <Button type="primary" block icon={<ShoppingCartOutlined />}>
                {`Basket (€ ${toPrice(totalAmount)})`}
            </Button>
        </Link>
    </Styled.BasketWrapper>
);

export default BasketOverview;
