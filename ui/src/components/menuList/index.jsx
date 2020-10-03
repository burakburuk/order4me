import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { List, Spin } from 'antd';
import * as Styled from './style';
import MenuItem from '../menuItem';

const MenuList = ({
    loading,
    hasMore,
    menuName,
    menuList,
    onInfiniteOnLoad,
    onSelect,
    onAddToBasket,
}) => (
    <Styled.InfiniteContainer>
        <Styled.MenuTitle>{menuName}</Styled.MenuTitle>
        <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={onInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
        >
            <List
                dataSource={menuList}
                renderItem={(item) => (
                    <MenuItem
                        menuItem={item}
                        onSelect={onSelect}
                        onAdd={onAddToBasket}
                    />
                )}
            >
                {loading && hasMore && (
                    <Styled.LoadingWrapper>
                        <Spin />
                    </Styled.LoadingWrapper>
                )}
            </List>
        </InfiniteScroll>
    </Styled.InfiniteContainer>
);

MenuList.propTypes = {
    menuName: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    menuList: PropTypes.object.isRequired,
    onInfiniteOnLoad: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onAddToBasket: PropTypes.func.isRequired,
};

export default MenuList;
