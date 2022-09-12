import { ActionTypeForm } from "../action-types";
import { FormAction } from "../actions";

export interface IFormState {
    name: string,
    mail: string,
    phone: string | number,
    account: string,
    country: string,
    company: string,
    productType: string,
    attach: File[] | string,
}

const initialState : IFormState = {
    name: "",
    mail: "",
    phone: "",
    account: "",
    country: "",
    company: "",
    productType: "",
    attach: "",
}

const formReducer = (state = initialState, action: FormAction) => {
    switch(action.type) {
        case ActionTypeForm.SUBMIT: 
            state.name = action.payload.name
            state.mail = action.payload.mail;
            state.phone = action.payload.phone;
            state.account = action.payload.account;
            return state;

        default: 
            return state;
    }
}

export default formReducer;

{/*country: string,
    company: string,
    productType: string,
    attach: any,*/}