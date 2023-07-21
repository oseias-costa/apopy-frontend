import axios from "axios";

    export async function httpClient(query: string, variables: any){
        const data = axios({
            url: 'https://apopy-api.vercel.app/graphql',
            method: 'post',
            data: {
                query: `${query}`,
                variables: variables
            }
        })
        return data
    }
