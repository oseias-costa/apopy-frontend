import axios from "axios";

export async function httpClient(query: string, variables: any) {
  const token = JSON.parse(localStorage.getItem("apopyToken"));

  const data = axios({
    url: "https://apopy-api.vercel.app/graphql",
    method: "post",
    data: {
      query: `${query}`,
      variables: variables,
    },
    headers: {
      Authorization: token,
    },
  });

  return data;
}
