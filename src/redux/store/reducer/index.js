import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import mainReducer from "..";

const persistConfig = {
    key: 'root',
    storage,
    transforms: [encryptTransform({
        secretKey: "nfdjsfn"
    })]
}

const persistedReducer = persistReducer(persistConfig ,mainReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
      getDefaultMiddleware({
        serializableCheck: false
      })
})

export const persistor = persistStore(store)