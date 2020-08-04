/* constant definition for api and web path */
const V1 = "v1";

const API = {
  WEB: {
    LOGIN: `${V1}/api/auth/login`,
    GET_ME: `${V1}/api/member/getMe`,
    MEMBER_UPDATE: `${V1}/api/member/update`,
    MEMBER_CHANGE_PASSWORD: `${V1}/api/member/changePassword`,
    REGISTER: `${V1}/api/auth/register`,
    FORGOT_PASSWORD: `${V1}/api/auth/forgotPassword`,
    HELP: `${V1}/api/help`
  }
};

export default API;