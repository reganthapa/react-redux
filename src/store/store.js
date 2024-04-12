import { configureStore } from "@reduxjs/toolkit";
import { taskreducer } from "./taskslice";

 const store = configureStore ({
    reducer : {
        taskState: taskreducer
    }
 })


 export default store;