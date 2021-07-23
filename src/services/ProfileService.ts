import { delayData } from "../common/util"

const data = require("../assets/json/profile.json")

export class ProfileService {
    static getData(name: string) {
       const result = data[name]
       return delayData(result)
    }
}