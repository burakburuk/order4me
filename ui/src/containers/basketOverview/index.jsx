import React from 'react';

import { connect } from 'react-redux';
import BasketOverview from '../../components/basketOverview';
import { getBasketTotalAmount } from '../../state/basket/selectors';

const BasketOverviewContainer = ({ totalAmount }) => (
    <BasketOverview totalAmount={totalAmount} />
);

const mapStateToProps = (state) => ({
    totalAmount: getBasketTotalAmount(state),
});

export { BasketOverviewContainer };
export default connect(mapStateToProps, null)(BasketOverviewContainer);
