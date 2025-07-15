import {createSlice,current} from "@reduxjs/toolkit"
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            // directly mutating the state
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
           state.items.pop(); //write the logic to remove specific item based on index.
        },
       
        clearItem:(state,action)=>{
          
            // state.items.length=0; //it clears items array. state--> []
            return {items:[]};
        }
    }
})

// we have to export reducers and actions
export default cartSlice.reducer;
export const{addItem, removeItem,clearItem}=cartSlice.actions;

