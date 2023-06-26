import { OperationVariables, useQuery } from "@apollo/client";

export class ListSupliers {
  static get(query: OperationVariables) {
    const { data } = useQuery<OperationVariables>(query);
    return { data };
  }
}

export const graphqlQuery = (query: OperationVariables) => {
  const { data } = useQuery<OperationVariables>(query);
  return data;
};
