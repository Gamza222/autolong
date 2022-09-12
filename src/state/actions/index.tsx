import { ActionTypeForm, ActionTypeLang } from "../action-types/index"
import { IFormState } from "../reducers/FormReducer"

interface LangRuAction {
    type: ActionTypeLang.RU,
}
interface LangEnAction {
    type: ActionTypeLang.EN,
}
interface LangChinaAction {
    type: ActionTypeLang.CHINA,
}

export interface FormAction {
    type: ActionTypeForm.SUBMIT,
    payload: IFormState
}

export type ActionLang = LangRuAction | LangEnAction | LangChinaAction