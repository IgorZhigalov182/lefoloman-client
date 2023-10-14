const URL = 'http://localhost:8080/api';

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};
  
const checkSuccess = (res) => {
    if (res?.success) {
        return res;
    }

    return Promise.reject(`Ответ не success: ${res}`);
};
  
const request = (endpoint, options = {}) => {
    return fetch(`${URL}${endpoint}`, options)
        .then(res => checkResponse(res))
        .then(res => checkSuccess(res));
};

export const getBranches = () => request(`/banks`);