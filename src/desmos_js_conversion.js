function ListToDesmos(list) {
    s="\\left["
    for (let i=0;i<(list.length-1);i++) {
        s+=(list[i]).toString();
        s+=",";
    }
    s+=(list[list.length-1]).toString();
    s+="\\right]"
    return s
}
function DesmosToList(string) {
    const inner = string.slice(6, -7); // remove \left[ and \right]
    return inner.split(',').map(x => x.trim());
}
