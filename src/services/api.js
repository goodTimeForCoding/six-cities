import axios from "axios";

const BASE_URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};


export const createAPI = (onUnauthorized) => { //принимает коллбэк который нужно вызвать на случай не авторизованности(например перенаправление пользователя на страницу с вводами логина или емейл)
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true, //разрешать делиться куками
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации — это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail); //функции перехватчики в параметрах

  return api;
};