import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { detailedProductReducer } from "./reducers/detailedProductReducers"
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    detailedProduct: detailedProductReducer,
    shoppingCart: cartReducer

})

const shoppingCartStorage = localStorage.getItem("shoppingCart") ? JSON.parse(localStorage.getItem("shoppingCart")) : []

const initialState = {
    shoppingCart: { shoppingCart: shoppingCartStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store