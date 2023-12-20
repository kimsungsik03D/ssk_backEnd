/** api키와 env 파일의 api를 비교함
 * @param {string | string[] | undefined} apiKey
 * @param {string} uuid
 * @returns {boolean}
 */
export const authKey = (
  apiKey: string | string[] | undefined,
  uuid = ""
): boolean => {
  let isAuth: boolean = false;
  if (apiKey === process.env.API_KEY) {
    isAuth = true;
  }
  return isAuth;
};
