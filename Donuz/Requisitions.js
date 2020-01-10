const base_url = 'https://app.donuz.co/api/';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))
const token = config.token;

export async function get(url, header = null) {
    if (header == null){
        header = {
            'token': token,
            'estabelecimento':config.estabelecimento_id
        }
    }
    header.token = config.token
    header.estabelecimento= config.estabelecimento
    let obj = await fetch(base_url + url, {
            headers: header
        })
        .then((data) => (data.json())).catch((data) => console.log(data));
    return obj;
}
export async function deleteRequest(url, header = null) {
    if (header == null){
        header = {
            'token': token,
            'estabelecimento':config.estabelecimento_id
        }
    }
    header.token = config.token
    header.estabelecimento= config.estabelecimento
    let obj = await fetch(base_url + url, {
            headers: header,
            method:'DELETE'
        })
        .then((data) => (data.json())).catch((data) => console.log(data));
    return obj;
}
export async function post(url, header, parameter) {
    let obj = await fetch(base_url + url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(parameter),
            json: true
        }).then((data) => (data.json())).catch((data) => console.log(data));
    return obj;
}
export async function put(url, header, parameter) {
    let obj = await fetch(base_url + url, {
            method: 'PUT',
            headers: header,
            body: JSON.stringify(parameter),
            json: true
        }).then((data) => (data.json())).catch((data) => console.log(data));
    return obj;
}