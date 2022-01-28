// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducers";
// import reduxThunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)))

const store = configureStore({
    reducer: {
        counter: counterSlice
    },
  })

export default store;