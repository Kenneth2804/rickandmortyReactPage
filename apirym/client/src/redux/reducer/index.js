const initial ={
    allCharacters: [],
    allCharacters2: []
}

export default function rootReducer(state = initial, action){
    switch(actions.type){
        case 'GET_FOOD':
            return{
                ...state,
                allCharacters: action.payload,
                allCharacters2: action.payload
            }

            default:return state;
    }
}