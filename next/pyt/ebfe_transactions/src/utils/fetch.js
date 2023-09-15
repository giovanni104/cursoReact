import axios from "axios";

const publicFetchSecurity = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SECURE_API_URL,
});
const publicFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
const backFetch = axios.create({
  baseURL: process.env.BACK_PUBLIC_API_URL,
});
const loginFetch = axios.create({
  baseURL: process.env.LOGIN_URL,
});
const privateFetch = (context) =>
  axios.create({
    baseURL: process.env.NEXT_API_URL,
    headers:
      context &&
      context.req &&
      context.req.headers &&
      context.req.headers.cookie
        ? { cookie: context.req.headers.cookie }
        : undefined,
  });

export {
  publicFetch,
  publicFetchSecurity,
  privateFetch,
  backFetch,
  loginFetch,
};
