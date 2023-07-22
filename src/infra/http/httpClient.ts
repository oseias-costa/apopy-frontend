import axios from "axios";

    export async function httpClient(query: string, variables: any){
        const getHeader = localStorage.getItem("apopyToken")

        const data = axios({
            url: 'https://apopy-api.vercel.app/graphql',
            method: 'post',
            data: {
                query: `${query}`,
                variables: variables
            },
            headers: {
                Authorization: getHeader?.split(' ')[1]
            }
        })

        return data
    }
