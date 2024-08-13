const initalState={
    product:"",
}

export const Reducer1=(state=initalState,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART_Reducer':
            
            return{
                ...state,
                product:action.payload

            }
    
        default:
           return state;
    }
}