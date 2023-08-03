import { API_URL } from "../../config"
import { API_PATH } from "../../constants"
import { ILoginWithGoogleBody, IRegisterWithGoogleBody } from "./apis.types"
import unauthAxios from "./unauthAxios"

export const registerWithGoogle = async (body: IRegisterWithGoogleBody) => {
    const unauthApi = unauthAxios()
    const {data} = await unauthApi.post(API_URL + API_PATH.REGISTER_WITH_GOOGLE, body)
    return data;
}

export const loginWithGoogle = async (body: ILoginWithGoogleBody) => {
    const unauthApi = unauthAxios()
    const {data} = await unauthApi.post(API_URL + API_PATH.LOGIN_WITH_GOOGLE, body)
    return data;
}