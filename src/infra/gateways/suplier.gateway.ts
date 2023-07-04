import axios from "axios";

export const getSupliersGateway = async () => {
  const data = await axios({
    url: "https://apopy-api.vercel.app/graphql",
    method: "post",
    data: {
      query: `
            query Suplier {
                supliers {
                _id
                name
                userId
                }
            }
            `,
      variables: {},
    },
  });
  return data;
};

export async function createSuplierGateway({
  name,
  userId,
}: {
  name: string;
  userId: string;
}) {
  const data = await axios({
    url: "https://apopy-api.vercel.app/graphql",
    method: "post",
    data: {
      query: `
            mutation CreateSuplier($suplierInput: SuplierInput) {
              createSuplier(suplierInput: $suplierInput) {
                _id
                name
                userId
              }
            }
          `,
      variables: {
        suplierInput: {
          name: name,
          userid: userId,
        },
      },
    },
  });
  return data;
}

export default async function updateSuplierGateway({
  _id,
  name,
}: {
  _id: string;
  name: string;
}) {
  const data = await axios({
    url: "https://apopy-api.vercel.app/graphql",
    method: "post",
    data: {
      query: `
            mutation UpdateSuplier($suplierInput: SuplierInput) {
                updateSuplier(suplierInput: $suplierInput) {
                _id
                name
                }
            }
            `,
      variables: {
        suplierInput: {
          _id: _id,
          name: name,
        },
      },
    },
  });
  return data;
}

export async function deleteSuplierGateway(id: string) {
  const data = axios({
    url: "https://apopy-api.vercel.app/graphql",
    method: "post",
    data: {
      query: `
              mutation DeleteSuplier($id: ID) {
                deleteSuplier(_id: $id) {
                  _id
                }
              }
            `,
      variables: {
        id: id,
      },
    },
  });

  return data;
}
