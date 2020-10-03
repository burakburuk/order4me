import axios from 'axios';

const getHeader = () => ({
    headers: { Accept: 'application/vnd.hmrc.1.0+json' },
});

export async function get(url) {
    const response = await axios.get(url, getHeader());
    return response.data;
}
