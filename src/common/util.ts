/**
 * check is email
 * @param email the email address
 */
import { Any } from "../types";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { MOCK_DELAY_TIME } from "../constants";
import * as icons from "../icons";
import * as _ from "lodash";

export function validateEmail(email = "") {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// import {
//   NavigationActions,
//   NavigationNavigateActionPayload,
//   StackActions,
// } from "react-navigation";
// /**
//  * global nav
//  */
// let _navigationRef: Any;
// export const setNavigation = (ref: Any) => {
//   _navigationRef = ref;
// };
// export const getNavigation = (): Any => _navigationRef;

// export const utilNavigate = (options: NavigationNavigateActionPayload) => {
//   _navigationRef.dispatch(NavigationActions.navigate(options));
// };

// export const utilNavigateGoBack = () => {
//   _navigationRef.dispatch(NavigationActions.back());
// };

// export const utilNavigateReset = (options: NavigationNavigateActionPayload) => {
//   _navigationRef.dispatch(
//     StackActions.reset({
//       index: 0,
//       actions: [NavigationActions.navigate(options)],
//     })
//   );
// };

/**
 * store date
 * @param key the key
 * @param obj the json object
 */
export const saveData = (key: string, obj: Any) => {
  return AsyncStorage.setItem(key, JSON.stringify(obj));
};

/**
 * get data
 * @param key
 */
export function getData<T>(key: string): Promise<T | undefined> {
  return AsyncStorage.getItem(key).then((jsonStr) => {
    if (!jsonStr) {
      return undefined;
    }
    return JSON.parse(jsonStr || "{}") as T;
  });
}

export function delayData<T>(data: T, time?: number, error?: any) {
  return new Promise<T>( (res, rej) => {
    setTimeout(() => {
      if(error){
        rej(data)
      } else {
        res(data)
      }
    }, time || MOCK_DELAY_TIME);
  })
}

export function fetchDataErrorHandle(e: any) {
  console.log(e)
}

export function getImageSrc(src: any) {
  if(!(typeof(src) === "string")) {
    return src
  }
  if(!src.startsWith('http')) {
    return _.get(icons, src)
  }
  return {uri: src}
}

export function requestErrorHandle(e) {
  console.log(e)
}