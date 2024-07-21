import { createStore } from "redux";


const initialstate = {
    "subscribers": []
}


function subscriberReducer(state = initialstate,action) {

    switch (action.type) {
        case "SET_SUBSCRIBERS":
            return {...state, "subscribers":action.payload}
            
    
        default:
            return state;
    }
    
}


export default createStore(subscriberReducer);