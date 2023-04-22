
const initialState = {
    notes:[],
};

function rootReducer(state = initialState ,action){
    if(action.type == 'ADD_NOTE'){
        return {
            notes:[
                ...state.notes,
                {
                    title:action.title,
                    content:action.content
                }

            ]
        }
    } 
    else if(action.type == 'REMOVE_NOTE'){
        return{
            notes: state.notes.filter((note, index)=>{
                return index != action.id
            })
        }
    }
    else{
        return state
    }
}

export default rootReducer