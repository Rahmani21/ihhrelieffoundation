import { createSlice, configureStore } from "@reduxjs/toolkit";
import { firstSlideData } from "../../../assets/Data/Data";

export const sliderSlice =  createSlice({
    name :" slider",
    initialState :{
        value:0,
        length:firstSlideData.length
    },
    reducers:{
        nextSlide(state,action){
            console.log('action',action.payload);
            console.log('action :',action);
            console.log('state :',state);
            state.value = action.payload > state.length - 1 ? 0 : action.payload
            
        },
        prevSlide(state,action){
            state.value = action.payload < 0 ? state.length - 1: action.payload;

        },
        dotSlide(){}
    }
})

export const {nextSlide,prevSlide,dotSlide} = sliderSlice.actions
export default sliderSlice.reducer