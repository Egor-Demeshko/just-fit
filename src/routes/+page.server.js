export function load({ locals }){
    if(locals){
        return locals;
    } else {
        throw new Error(404, "Not found");
    }
}