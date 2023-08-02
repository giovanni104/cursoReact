import { configureStore } from "@reduxjs/toolkit";
import {origenSlice} from "./miSlice"


export default configureStore({
reducer:{
    misValores:origenSlice.reducer
}

})