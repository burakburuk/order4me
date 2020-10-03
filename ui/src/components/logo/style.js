import styled from 'styled-components';
import { Image } from 'antd';

export const ImageWrapper = styled(Image)`
    margin-top: 10px;
    margin-bottom: 10px;
    left: calc(50% - ${(props) => props.width / 2}px);
`;
