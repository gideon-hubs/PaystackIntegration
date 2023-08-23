import { createSlice } from "@reduxjs/toolkit";

const initialState={
    brands:[],
    images:[],
}

const brandsSlice =createSlice ({
    name:"brands",
    initialState,
    reducers:{
        setBrandImages:(state,action) => {
            return action.payload;
        },
        setFigureImages:(state,action)=> {
            return action.payload

        },
    },
});

export const {setBrandImages,setFigureImages}= brandsSlice.actions
export default brandsSlice.reducer