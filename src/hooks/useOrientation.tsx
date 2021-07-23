import React from "react";
import { useWindowDimensions} from "react-native";

export type OrientationType = "portrait" | "landscape";

export const useOrientation = (): OrientationType => {
    const dim = useWindowDimensions()

    if(dim.height >= dim.width) {
        return "portrait"
    } else {
        return 'landscape'
    }
}