import { combineReducers } from "redux";
import { IProfile } from "src/models/IProfile";
import profile from "./profile";

export interface RootState {
  profile: IProfile
}

export const allReducers = combineReducers<RootState>({
  profile,
});
