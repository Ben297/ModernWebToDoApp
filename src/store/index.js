import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware/index.js"

 /* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware)


));
/* eslint-enable */
export default store;