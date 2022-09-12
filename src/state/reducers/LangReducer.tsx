import { ActionLang } from "../actions/index"
import { ActionTypeLang } from "../action-types/index"


const initialState = "RU"

const langReducer = (state: string = initialState, action: ActionLang) => {
    switch(action.type) {

        case ActionTypeLang.RU: 
            return "RU"

        case ActionTypeLang.EN:
            return "EN";

        case ActionTypeLang.CHINA:
            return "中文";

        default: 
            return "RU"
    }
}

export default langReducer;