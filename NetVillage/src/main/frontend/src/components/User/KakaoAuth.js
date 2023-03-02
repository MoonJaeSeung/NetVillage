const REST_API_KEY = "1de0c300eae169bff08cb526f618bbf7";
const REDIRECT_URI = "http://localhost:3000/kakaoLogin";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;