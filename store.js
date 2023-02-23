import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './reducers/accountReducer'
import priceReducer from './reducers/priceReducer'
import historialReducer from './reducers/historialReducer'
import balanceReducer from './reducers/balanceReducer'

import admcBalanceReducer from './reducers/admcBalanceReducer'
import admcAllowancementReducer from './reducers/admcAllowancementReducer'


const store = configureStore({
    reducer: {
        account: accountReducer,
        balance: balanceReducer,
        historial: historialReducer,
        price: priceReducer,
        
        admcBalance: admcBalanceReducer,
        admcAllowancement: admcAllowancementReducer,
    }
  })

export default store