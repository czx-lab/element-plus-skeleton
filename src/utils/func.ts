/**
 * @param data 
 * @param key 
 * @param index 
 * @returns 
 */
export function ArrayColumn(data: Array<any>, key: string | number | null, index: string | number | null): Array<any> {
    if(!data.length) {
        return [];
    }
    const result = [] as Array<any>
    data.forEach((item, index) => {
        const child = item as (Array<any>)
        if(key != null && index != null) {
            child.forEach(_item => {
                result[_item[index]].push(_item[key])
            })
        }
        if(key != null && index == null) {
            child.forEach(_item => {
                result.push(_item[key])
            })
        }
        if(key == null && index != null) {
            child.forEach(_item => {
                result[_item[index]].push(_item)
            })
        }
        if(key == null && index == null) {
            child.forEach(_item => {
                result.push(_item)
            })
        }
    })
    return result
}