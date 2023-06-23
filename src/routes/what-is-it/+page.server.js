export const prerender = true;



export function load({ pageMeta }){
    if(!pageMeta) return {};
    return {
        pageMeta
    }
}