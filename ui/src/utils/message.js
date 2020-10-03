import { message } from 'antd';

export const configureMessage = () => message.config({
    duration: 2,
    maxCount: 3,
});
