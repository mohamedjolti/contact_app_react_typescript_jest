import thunk from 'redux-thunk';
import { createStore ,applyMiddleware} from 'redux'
import contactApp from './reducers/ContactReducer';
const middleware=[thunk]
const initialState=[]
export const store=createStore(contactApp,initialState,applyMiddleware(...middleware));