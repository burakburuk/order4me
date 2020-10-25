import React from 'react';
import HeaderLinks from '../../containers/headerLinks';
import BasketOverview from '../../containers/basketOverview';

const WrapperPage = ({ render, ...rest }) => (
    <>
        <HeaderLinks />
        {React.createElement(render, rest)}
        <BasketOverview />
    </>
);

export default WrapperPage;
