import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageService {
    /**
     * save data
     * @param key  the key
     * @param value the value
     * @returns promise
     */
    static save(key: string, value: any) {
        return AsyncStorage.setItem(key, JSON.stringify(value))
    }

    /**
     * get data
     * @param key the key
     * @returns promise
     */
    static get<T>(key: string): Promise<T | undefined>  {
        return AsyncStorage.getItem(key).then((jsonStr) => {
            if (!jsonStr) {
              return undefined;
            }
            return JSON.parse(jsonStr || "{}") as T;
        });
    }

    static remove(key: string) {
        return AsyncStorage.removeItem(key)
    }
}



// /**
//  * store date
//  * @param key the key
//  * @param obj the json object
//  */
//  export const saveData = (key: string, obj: any) => {
//     return AsyncStorage.setItem(key, JSON.stringify(obj));
//   };
  
//   /**
//    * get data
//    * @param key
//    */
//   export function getData<T>(key: string): Promise<T | undefined> {
//     return AsyncStorage.getItem(key).then((jsonStr) => {
//       if (!jsonStr) {
//         return undefined;
//       }
//       return JSON.parse(jsonStr || "{}") as T;
//     });
//   }