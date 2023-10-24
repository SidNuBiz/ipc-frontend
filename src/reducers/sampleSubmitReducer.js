import {
    ALL_FORM_DATA,
    SAMPLE_FORM_DATA,
    MAIN_FORM_DATA,
    MAIN_FORM_DATA_EMPTY
} from "../constants/sampleSubmitConstant"


export const sampleSubmitFormReducer = (state = {mainFormData:{},sampleFormData:[]},action) => {
    switch (action.type) {
        case MAIN_FORM_DATA:
            return {
                ...state,
                mainFormData: action.payload
            };
        case SAMPLE_FORM_DATA:
            return {
                ...state,
                sampleFormData: action.payload
            };
        case MAIN_FORM_DATA_EMPTY:
            return {
                ...state,
                mainFormData:{},
                sampleFormData:[]
            }
        default:
            return state
    }
}

