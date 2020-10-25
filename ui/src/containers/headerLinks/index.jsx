import React from 'react';
import HeaderLinkNavigations from '../../components/headerLinkNavigations';
import { useHistory } from 'react-router-dom';

const HeaderLinks = () => {
    const history = useHistory();
    const visible = history.location.pathname !== '/';

    const handleGoHome = () => {
        history.push('/');
    };

    return (
        <HeaderLinkNavigations
            onGoBack={history.goBack}
            onGoHome={handleGoHome}
            visible={visible}
        />
    );
};

export default HeaderLinks;
