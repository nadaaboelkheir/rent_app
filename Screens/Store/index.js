import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProductSlice from './ProductsAction'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
// import storage from 'redux-persist/lib/storage'

// const rootReducer = combineReducers(
    
//         {
//             products: ProductSlice
//         }
    
// )

// const persistConfig = {
//     key: 'root',
//     storage:AsyncStorage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore(
    {
        reducer:   {
            products: ProductSlice
        }
        
        // persistedReducer,
        // middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware({
        //   serializableCheck: {
        //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        //   },
        // }),
    }
)

// export const persistor = persistStore(store)

export default store;
