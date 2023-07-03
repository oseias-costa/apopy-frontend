import {
  useMutation,
  ApolloCache,
  DefaultContext,
  OperationVariables,
} from "@apollo/client";
import axios from "axios";
import { insertItemOnCache } from "../cache/add-item.cache";
import { CREATE_SUPLIER } from "../http/suplier.query";

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

export const createSuplierGateway = () => {
  const [createSuplier, { error, data, loading }] = useMutation<
    any,
    OperationVariables,
    DefaultContext,
    ApolloCache<any>
  >(CREATE_SUPLIER, {
    update: (cache, { data }) =>
      insertItemOnCache(cache, data, createSuplier, "supliers"),
  });
  return [data, loading, error];
};

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
