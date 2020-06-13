import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

import initialState from "./initialState";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const middlewares = applyMiddleware(thunkMiddleware);
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, initialState, middlewares);
export const persistor = persistStore(store);

// export default {
//   store,
//   persistor
// };
