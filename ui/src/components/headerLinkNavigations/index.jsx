import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import { LeftOutlined, HomeOutlined } from '@ant-design/icons';

const HeaderLinkNavigations = ({ onGoBack, onGoHome, visible }) =>
    visible && (
        <Styled.NavigationWrapper>
            <Styled.ButtonWrapper onClick={onGoBack}>
                <LeftOutlined />
            </Styled.ButtonWrapper>
            <Styled.ButtonWrapper onClick={onGoHome}>
                <HomeOutlined />
            </Styled.ButtonWrapper>
        </Styled.NavigationWrapper>
    );

HeaderLinkNavigations.propTypes = {
    visible: PropTypes.bool.isRequired,
    onGoBack: PropTypes.func.isRequired,
    onGoHome: PropTypes.func.isRequired,
};

export default HeaderLinkNavigations;
