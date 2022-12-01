import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./reducers/citiesAPI";
import itinerariesAPI from "./reducers/itinerariesAPI";

export default configureStore({  //// config store. p1 = "Reducers" , p2 = "Initial State"
    reducer: {
        [citiesAPI.reducerPath]: citiesAPI.reducer, //// Configuro el reducer al store
        [itinerariesAPI.reducerPath]: itinerariesAPI.reducer, //// Configuro el reducer al store
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(citiesAPI.middleware)
    .concat(itinerariesAPI.middleware)
   
});