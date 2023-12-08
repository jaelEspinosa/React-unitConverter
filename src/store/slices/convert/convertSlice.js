import { createSlice } from '@reduxjs/toolkit'



export const convertSlice = createSlice({
  name: 'convert',
  initialState : {
       inches: 0,
       feet: 0,
       meters:0,
       km: 0,
       miles: 0,
       cm: 0,
       selectedValue: ''
  },
  reducers: {
 
   kmToMillas : ( state, action) =>{
    state.miles = action.payload / 1.609344;
   },   
   
   millasToKm : (state, action) => {
    state.km = action.payload * 1.609344;
   },

   setKm : (state, action) =>{
    state.km = Number (action.payload);
   },

   setMiles: (state, action) =>{
    state.miles = Number (action.payload);
   },

   metersToFeet: (state, action) =>{
    state.feet = action.payload * 3.28084;
   },

   feetToMeters: (state, action) =>{
    state.meters = action.payload / 3.28084;
   },
  
   setFeet: (state, action) =>{
    state.feet = Number (action.payload);
   },
   setMeters: (state, action) =>{
    state.meters = Number (action.payload);
   },

   cmToInch: (state, action) => {
    state.inches = action.payload / 2.54
   },
   inchToCm: (state, action) => {
    state.cm = action.payload * 2.54
   },
   setCm:( state, action) => {
     state.cm = Number (action.payload)
   },
   setInch:( state, action ) =>{
     state.inches = Number (action.payload)
   },

   setSelectedValue: (state,action) => {
    state.selectedValue = action.payload
   }

}


});


export const {  
                setSelectedValue,
                setMiles, 
                setMeters,
                setKm, 
                setInch,
                setFeet,
                setCm,
                millasToKm, 
                metersToFeet, 
                kmToMillas, 
                inchToCm,
                feetToMeters,
                cmToInch,

              } = convertSlice.actions