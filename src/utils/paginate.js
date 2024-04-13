
export function paginate(items = [], pageNumber,pageSize) {
    const startIndex = Math.ceil((pageNumber-1)*pageSize);
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex,endIndex);
}