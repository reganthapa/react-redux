import  {createSlice} from "@reduxjs/toolkit"

const taskslice = createSlice({
    name:"task",
    initialState : {
        // store 
        tasklist: []
    },
    reducers:{
        addtask(state,action){

        },
        removetask(state,action){},
    }

})


export const {addtask,removetask} = taskslice.actions
export const taskreducer = taskslice.reducer