
export const insertItemOnCache = (cache: any, data: [], createFn: any, field: string) => {
    const cacheId: string | any = cache.identify(data[createFn]);
    return cache.modify({
        fields: {
            [field]: (existingFieldData: any, { toReference } : { toReference: (cacheId: string) => string}) =>{
                return [...existingFieldData, toReference(cacheId)];
            },
        },
    });
}
