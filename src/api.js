import axios from "axios";

// const api = axios.create({
//   baseURL: "https://openapi.naver.com/v1/search/book.json",
//   headers: {
//     "X-Naver-Client-Id": "sVteODrCOzSgXs9y85S9",
//     "X-Naver-Client-Secret": "1CpmsOUdQv"
//   },
// });

const api = axios.create({
    baseURL: "https://dapi.kakao.com/v3/search/book",
    headers: {
      "Authorization": "KakaoAK d45404c5fe73d1b8decee15ba1182a36",
    },
  });

export const bookApi = {
  search: (term) =>
  api.get("", {
    params: {
      query: term,
    },
  }),
};
