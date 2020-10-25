import React from 'react';
import { Route } from 'react-router-dom';
import MenuItemDetailsContainer from '../../containers/menuItemDetails';
import HeaderLinks from '../../containers/headerLinks';
import BasketOverview from '../../containers/basketOverview';

const MenuItemDetailsPage = ({ match }) => (
    <Route
        path={`${match.path}/:menuItemId`}
        render={({ match }) => (
            <>
                <HeaderLinks />
                <MenuItemDetailsContainer
                    menuGroupId={match.params.id}
                    menuItemId={match.params.menuItemId}
                />
                <BasketOverview />
            </>
        )}
    />
);

export default MenuItemDetailsPage;
