import { IProfile } from "../../models/IProfile";
import {
  GET_PROFILE,
  GET_PROFILE_FAILED,
  SET_LOGIN_STATUS,
} from "../actions/profile";
import { AppActionType } from "../actions"

/**
 * profile state
 */
export interface IProfileState {
  data?: IProfile;
  Err?: Error | null;
  logined?: boolean;
}

/**
 * profile reducer
 */
export default (state = {}, action: AppActionType): IProfileState => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, data: action.payload, Err: null };
    case GET_PROFILE_FAILED:
      return { ...state, Err: action.payload };
    case SET_LOGIN_STATUS:
      return {...state, logined: action.payload}
    default:
      return state;
  }
};
