import { put,call,takeEvery } from "redux-saga/effects";

function* ADD_TO_CART_Saga(action){
    yield(put({type:'ADD_TO_CART_Reducer',payload:action.payload}))
}

function* mySaga(){
    yield(takeEvery('ADD_TO_CART_ACTION',ADD_TO_CART_Saga))
}

export default mySaga;