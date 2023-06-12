import {
    TEST_FORM_DATA,
    SAMPLE_FORM_DATA,
    MAIN_FORM_DATA
} from "../constants/sampleSubmitConstant"


export const sampleSubmitFormReducer = (state = {testFormData:[],sampleFormData:[]},action) => {
    switch (action.type) {
        case TEST_FORM_DATA:
            return {
                ...state,
                testFormData: action.payload
            };
        case SAMPLE_FORM_DATA:
            return {
                ...state,
                sampleFormData: action.payload
            };
        default:
            return state
    }
}

