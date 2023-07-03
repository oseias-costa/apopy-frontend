import { TypedDocumentNode } from "@apollo/client";
import { client } from "../../main";

export const updateItemOnCache = (updateFn: any, field: string, fragment: TypedDocumentNode) => {
    return client.readFragment({
        id: `${[field]}:${[updateFn]._id}`,
        fragment: fragment
    });
}