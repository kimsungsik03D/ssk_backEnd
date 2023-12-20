"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authKey = void 0;
/** api키와 env 파일의 api를 비교함
 * @param {string | string[] | undefined} apiKey
 * @param {string} uuid
 * @returns {boolean}
 */
const authKey = (apiKey, uuid = "") => {
    let isAuth = false;
    if (apiKey === process.env.API_KEY) {
        isAuth = true;
    }
    return isAuth;
};
exports.authKey = authKey;
