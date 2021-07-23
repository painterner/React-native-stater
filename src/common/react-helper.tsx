import { AppStyleProp, AppStyleType } from "src/types";

/**
 * Function for get component props parameter
 * @param Param 
 * @param defaultP 
 * @returns 
 */
export function getParameter(Param, defaultP) {
    if(!Param && Param !== false) {
        return defaultP
    }
    if(!Param && Param === false) {
        return false
    }
    if(Param && Param !== true) {
        return Param
    }
    if(Param && Param === true) {
        return defaultP
    }
}

/**
 * Function for get style props parameter
 * @param Param 
 * @param defaultP 
 * @param field 
 * @returns 
 */
export function getNumberStyleParameter(Param, defaultP, field: keyof AppStyleType): AppStyleProp {
    const p = getParameter(Param, defaultP)
    if(p || p===0) {
        return {[field]: p}
    }
    return {} 
}