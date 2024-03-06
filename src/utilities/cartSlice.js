import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
name : "cart",
initialState : {
  item : []
},
reducers : {
  addItem : (state , action) => {
    let IsItemPresent = false
     state.item = state.item.map((e)=>{
      if(e.card.info.id === action.payload.card.info.id) {
        IsItemPresent = true
        return {...e, qty : e.qty + 1}
      }
      else{
        return e
      }
     })
     if (IsItemPresent == false){
    state.item.push({...action.payload , qty : 1})
     }
        },
  removeItem : (state) => {
     state.item.shift()
  }  ,
  removeParticularItem : (state,action) => {
    state.item = state.item.filter((res)=>{
      return !(res.card.info.id == action.payload.card.info.id)
    })
  },
  clearItem : (state) => {
    state.item.length = 0
  }
}
})
export const {addItem , removeItem , clearItem , removeParticularItem} = cartSlice.actions
export default cartSlice.reducer