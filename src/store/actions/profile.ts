import { Dispatch } from "redux";
import { ProfileService } from "../../services/ProfileService";
import { IProfile } from "../../models/IProfile";

/**
 * action keys
 */
export const GET_PROFILE = "[PROFILE] get";
export const SET_LOGIN_STATUS = "[PROFILE] set login status";
export const GET_PROFILE_FAILED = "[PROFILE] get failed";

/**
 * get profile
 * @param name the profile name
 */
export const getProfile = (name: string) => (dispatch: Dispatch) => {
  ProfileService.getData(name)
    .then((data) => {
      dispatch({ type: GET_PROFILE, payload: data });
    })
    .catch((e) => dispatch({ type: GET_PROFILE_FAILED, payload: e }));
};


 export const setLoginSatus = (data) => (dispatch: Dispatch<any>) => {
   dispatch({
     type: SET_LOGIN_STATUS,
     payload: data
   })
 }