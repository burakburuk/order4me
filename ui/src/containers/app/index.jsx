import React from 'react';

import QRCodeGenerator from '../qrCodeGenerator';
import MenuGroups from '../menuGroups';
import MenuPage from '../../pages/menu';
import MenuItemDetailsPage from '../../pages/menuItemDetails';
import { Switch, Route } from 'react-router-dom';
import WrapperPage from '../../pages/wrapper';
import Basket from '../basket';
import { Layout } from 'antd';
import * as Styled from './style';

const App = () => (
    <Layout>
        <Styled.SiteLayout>
            <Switch>
                <Route exact path="/">
                    <WrapperPage render={MenuGroups} />
                </Route>
                <Route path="/qr-code-generator">
                    <WrapperPage render={QRCodeGenerator} />
                </Route>
                <Route
                    path="/menu-group/:id/details"
                    component={MenuItemDetailsPage}
                />
                <Route path="/menu-group" component={MenuPage} />
                <Route path="/basket">
                    <WrapperPage render={Basket} />
                </Route>
            </Switch>
        </Styled.SiteLayout>
    </Layout>
);

export default App;
