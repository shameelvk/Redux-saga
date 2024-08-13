import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer';
import mySaga from './saga';


const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = configureStore({
  reducer:rootReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(mySaga)

// render the application
export default store;