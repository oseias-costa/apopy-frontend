import { TypedDocumentNode, useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";

export class GetList {
  static get(query: DocumentNode | TypedDocumentNode<string>) {
    const { data } = useQuery<DocumentNode | TypedDocumentNode<string>>(query);
    return { data };
  }
}

export const graphqlQuery = (query: DocumentNode) => {
  const { data } = useQuery<DocumentNode>(query);
  return data;
};
