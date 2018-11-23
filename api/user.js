import axios from "./config";

export function callApiFetch(params = {}) {
    return axios.get('/user', { params });
}

export function callApiAdd(params) {
    return axios.post('/user', params)
        .then(response => response)
        .catch(error => error)
}

export function callApiEdit(id, params) {
    return axios.put(`/user/${id}`, params)
        .then(response => response)
        .catch(error => error)
}

export function callApiDelete(id) {
    return axios.delete(`/user/${id}`)
        .then(response => response)
        .catch(error => error)
}

export function callApiShow(id) {
    return axios.get(`/user/${id}`)
        .then(response => response)
        .catch(error => error)
}
