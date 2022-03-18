import { CATEGORY_GET, CATEGORY_SUCCESS, CATEGORY_FAILURE } from '../constants/constants'

export const categoryReducers = (state = { categoryProducts: [] }, action) => {
    switch(action.type){
        case CATEGORY_GET:
            return { loading: true, categoryProducts: [] }

        case CATEGORY_SUCCESS:
            return { loading: false, categoryProducts: action.payload }

        case CATEGORY_FAILURE:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}