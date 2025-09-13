// "use clinet"
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {storage} from "redux-persist/lib/storage"
// import userReducer from "./userSlice";

// const rootReducer = combineReducers({
//     user:userReducer,
// });

// const persistConfig = {
//     key:"root",
//     storage,
//     whitelist:['user']
// }

// const persistedReducer = persistReducer(persistConfig,rootReducer)

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;