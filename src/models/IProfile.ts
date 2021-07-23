import { IRanking } from "./IRanking";

export interface IProfileAddress {
    addressLine1: string;
    addressLine2: string;
    areaCode: string;
}
export interface IProfileCount  {
    count: number;
    label: string;
}
export interface IProfile {
    points?: number
    avatar?: string
    name?: string
    type?: string
    firstName?: string
    lastName?: string
    email?: string
    mobile?: string
    address?: IProfileAddress
    counts?: IProfileCount[]
    mechanics: IProfile[]
    rankings?: IRanking[]
    pointsBalance: string
    workName?: string;
    vatNumber?: string;
    addrLine?: string;
    addrLine2?:string;
    areaCode?: string;
    
}
