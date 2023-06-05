
import { fields, measurementsSectors, measurements } from "$lib/server/formFields.js";



export function load(){
    if(fields && measurementsSectors && measurements){
        return {
            "fields": fields,
            "measurementsSectors": measurementsSectors,
            "measurements": measurements
        };
    } 
}