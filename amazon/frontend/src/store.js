import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { detailedProductReducer } from "./reducers/detailedProductReducers"
import { cartReducers } from './reducers/cartReducers'
import { entertainmentProductsReducers } from './reducers/entertainmentProductsReducers'
import { fitnessProductsReducers } from './reducers/fitnessProductsReducers'
import { lifestyleProductsReducers } from './reducers/lifestyleProductsReducer'
import { medicalProductsReducers } from './reducers/medicalProductsReducers'
import { gamingProductsReducers } from './reducers/gamingProductsReducers'
import { petsProductsReducers } from './reducers/petsProductsReducers'
const reducer = combineReducers({
    detailedProduct: detailedProductReducer,
    shoppingCart: cartReducers,
    entertainmentProducts: entertainmentProductsReducers,
    fitnessProducts: fitnessProductsReducers,
    lifestyleProducts: lifestyleProductsReducers,
    medicalProducts: medicalProductsReducers,
    gamingProducts: gamingProductsReducers,
    petsProducts: petsProductsReducers
})

const shoppingCartStorage = localStorage.getItem("shoppingCart") ? JSON.parse(localStorage.getItem("shoppingCart")) : []

const initialState = {
    shoppingCart: { cartProducts: shoppingCartStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store