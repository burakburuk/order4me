import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import MenuList from '../../components/menuList';
import { getMenuGroupById } from '../../state/menu/selectors';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { addItemToBasket } from '../../state/basket/actions';

const Menus = ({ menuGroup, onAddToBasket }) => {
    const match = useRouteMatch();
    const history = useHistory();

    const handleSelectItem = (selectedMenuItemId) => {
        history.push(`${match.url}/details/${selectedMenuItemId}`);
    };

    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const handleInfiniteOnLoad = () => {
        setLoading(true);

        if (menuGroup.menuList.length > 14) {
            message.warning('Infinite List loaded all');

            setLoading(false);
            setHasMore(false);
            return;
        }

        // this.fetchData((res) => {
        //     data = data.concat(res.results);
        //     this.setState({
        //         data,
        //         loading: false,
        //     });
        // });
    };

    return (
        <MenuList
            menuName={menuGroup.name}
            menuList={menuGroup.menuList}
            loading={loading}
            hasMore={hasMore}
            onInfiniteOnLoad={handleInfiniteOnLoad}
            onSelect={handleSelectItem}
            onAddToBasket={onAddToBasket}
        />
    );
};

const mapStateToProps = (state, ownProps) => ({
    menuGroup: getMenuGroupById(state, ownProps.menuId),
});

const mapDispatchToProps = (dispatch) => ({
    onAddToBasket(menuItem) {
        dispatch(addItemToBasket(menuItem));
    },
});

export { Menus };
export default connect(mapStateToProps, mapDispatchToProps)(Menus);
