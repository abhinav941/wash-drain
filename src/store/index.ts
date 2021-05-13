import createSagaMiddleware from "redux-saga";
import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from "./reducer";
import rootSaga from "./saga";



const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
