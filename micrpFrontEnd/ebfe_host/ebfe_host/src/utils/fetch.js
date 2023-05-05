import axios from 'axios';

const publicFetchSecurity = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SECURE_API_URL
});
const publicFetch = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});
export { publicFetch ,publicFetchSecurity};
