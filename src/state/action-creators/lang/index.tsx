import { ActionTypeForm, ActionTypeLang } from "../../action-types";
import { ActionLang } from "../../actions";
import { IFormState } from "../../reducers/FormReducer";

export const switchRu = () => {
    return {
        type: ActionTypeLang.RU
    }
}

export const switchEn = () => {
    return {
        type: ActionTypeLang.EN
    }
}

export const switchChina = () => {
    return {
        type: ActionTypeLang.CHINA
    }
}

export const submitForm = (data: IFormState) => {
    return {
        type: ActionTypeForm.SUBMIT,
        payload: data
    }
}