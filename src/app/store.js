import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storageSession from "redux-persist/lib/storage/session";
import userReducer from "../features/userSlice";
import clientReducer from "../features/clientSlice";
import userDetailReducer from "../features/userDetailSlice";
import itemReducer from "../features/itemSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
};

const rootReducer = combineReducers({
  user: userReducer,
  userDetail: userDetailReducer,
  client: clientReducer,
  item: itemReducer,
});

const persistedUserReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedUserReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
