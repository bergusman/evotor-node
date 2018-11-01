const request = require('request');

class Evotor {
  constructor(token) {
    this._baseUrl = 'https://api.evotor.ru/';
    this.token = token;
  }

  _makeRequest(route, query = {}) {
    return new Promise((resolve, reject) => {
      request({
        url: `${this._baseUrl}${route}`,
        headers: { 'X-Authorization': this.token },
        qs: query
      }, (err, res, body) => {
        if (err) {
          return reject(err);
        }

        try {
          const payload = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode <= 299) {
            resolve(payload);
          } else {
            reject(payload);
          }
        } catch {
          return reject(new Error('Parsing error'));
        }
      });
    });
  }

  /**
   * 
   */
  employees() {
    return this._makeRequest('api/v1/inventories/employees/search');
  }

  /**
   * 
   */
  devices() {
    return this._makeRequest('api/v1/inventories/devices/search');
  }

  /**
   * 
   */
  stores() {
    return this._makeRequest('api/v1/inventories/stores/search');
  }

  /**
   * 
   * @param {*} storeUuid 
   */
  products(storeUuid) {
    return this._makeRequest(`api/v1/inventories/stores/${storeUuid}/products`);
  }

  /**
   * 
   * @param {*} storeUuid 
   * @param {*} types 
   */
  documents(storeUuid, types) {
    return this._makeRequest(`api/v1/inventories/stores/${storeUuid}/documents`, { types: types });
  }
}

module.exports = Evotor;
