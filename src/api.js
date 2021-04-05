import axios from "axios";

const api = axios.create({
  baseURL: "https://openapi.naver.com/v1/search/book.json",
  headers: {
    "X-Naver-Client-Id": "sVteODrCOzSgXs9y85S9",
    "X-Naver-Client-Secret": "1CpmsOUdQv"
  },
});

export const bookApi = {
  search: (term) =>
  api.get("", {
    params: {
      query: encodeURIComponent(term),
    },
  }),
};
