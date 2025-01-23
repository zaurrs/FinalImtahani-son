import { configureStore } from '@reduxjs/toolkit'
import productSlice  from '../features/productSlice.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import basketSlice  from '../features/BasketSlice.js'
 
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, basketSlice)

export const store = configureStore({
  reducer: {
    products:productSlice,
    basket: persistedReducer
  },
  middleware: (getDefaultMiddleWare)=>getDefaultMiddleWare({serializableCheck:false})
})
export const persistor = persistStore(store)