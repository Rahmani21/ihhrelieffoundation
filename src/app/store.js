import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../components/Feature/Slices/SliderSlices'
export default configureStore({
  reducer: {
    slider:sliderReducer,
  },

})