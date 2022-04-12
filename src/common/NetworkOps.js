import axios from 'axios';

const TAG = 'NetworkOps: ';
// const unAuthenticatedRoutes = [];

const API_TIMEOUT = 10000;

axios.interceptors.request.use(async (config) => {
  let newConfig = config;
  try {
    // const isTokenRequired = !unAuthenticatedRoutes.includes(config.url);
    const isTokenRequired = false;
    // console.log(TAG, 'isTokenRequired', isTokenRequired);
    if (isTokenRequired) {
      // const token = await getAsyncData(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null);
      const token = 'change_me_later';

      newConfig = {
        ...newConfig,
        headers: {
          ...newConfig.headers,
          Authorization: `Bearer ${token}`,
        },
        timeout: API_TIMEOUT,
      };
    }
  } catch (e) {
    console.log(TAG,'28', 'Error in interceptor request', e);
  }

  return newConfig;
}, (error) => {
  console.log(TAG,'33', 'Error in interceptor request', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(
  async (res) => {
    try {
      const { data,status,headers,statusText } = res;
      console.log('recived data : ',`${status} - ${statusText}`);
      console.log('recived response headers date : ',headers.date);
      // console.log('recived data : ',data);
      const {  message, errorCode ,isSuccess} = data;
      if (!isSuccess) console.log(TAG,"43", `${errorCode} - ${message} - ${res.config.url}`);
      return data;
    } catch (e) {
      console.log(TAG,'46', 'error', e);
    }
    return {
      success: false,
      message: 'NetworkOps: Something went wrong intercepting response',
    };
  },

  (error) => {
    console.log(TAG,'55', error.message);
    return Promise.reject(error);
  },
);

export const makeGetRequest = (URL) => axios.get(URL);
export const makePostRequest = (URL, data = {}) => axios.post(URL, { ...data });
export const makePutRequest = (URL, data = {}) => axios.put(URL, { ...data });
