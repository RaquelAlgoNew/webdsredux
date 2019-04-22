import { EP_DATA_LOADED, DS_DATA_LOADED } from "../constants/actionTypes";

const initialState = {
    DS:{}, EP:{}, err:"",
}
export default function rootReducer(state=initialState, action){
    if (action.type === EP_DATA_LOADED) {
      return Object.assign({...state}, {
       EP: Object.assign({...state.EP},action.payload)
      });
    }
    if (action.type === DS_DATA_LOADED) {
      return Object.assign({...state}, {
       DS: Object.assign({...state.DS},action.payload)
      });
    }
    if (action.type === "API_ERRORED") {
      console.log(action.payload)
      return Object.assign({...state}, {
       err: state.err.concat(action.payload)
      });
    }
  
    return state;
}