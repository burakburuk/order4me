import styled from 'styled-components';
import { MenuGroupItem } from '../menuGroupItem/style';

export const MenuGroups = styled.div`
    display: flex;
    justify-content: center;

    ${MenuGroupItem} {
        margin: 5px;
    }
`;

export const MenuGroupsWrapper = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const MenuTitle = styled.h3`
    text-align: center;
`;
