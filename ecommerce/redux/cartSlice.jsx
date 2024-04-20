import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts: []
}
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: { 

        //add to cart
        addToCart: (state, action) => {
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
            }
        },
        //RemoveToCart  
        RemoveToCart:(state,action) => {
            const data = state.carts.filter((itm)=>itm.id !== action.payload);
            state.carts = data
        },
        
        //Remove Single Item

        RemoveSingleIteam:(state,action)=> {
            const IteamIndex_dec = state.carts.findIndex((itm)=> itm.id === action.payload.id);
            if(state.carts[IteamIndex_dec].qnty >= 1){
                state.carts[IteamIndex_dec].qnty -= 1
            }
        },

        //Empty Cart

        EmptyCart: (state,action)=>{
            state.carts =  [];
        }
    }
})



export const { addToCart,RemoveToCart ,RemoveSingleIteam,EmptyCart} = cartSlice.actions;

export default cartSlice.reducer;