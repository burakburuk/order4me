import React from 'react';
import Menus from '../../containers/menus';
import { Route } from 'react-router-dom';
import HeaderLinks from '../../containers/headerLinks';
import BasketOverview from '../../containers/basketOverview';

const MenuPage = ({ match }) => (
    <Route
        path={`${match.path}/:id`}
        render={({ match }) => (
            <>
                <HeaderLinks />
                <Menus menuId={match.params.id} />
                <BasketOverview />
            </>
        )}
    />
);

export default MenuPage;
