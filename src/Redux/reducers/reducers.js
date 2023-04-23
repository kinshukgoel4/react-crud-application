
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
    else if(action.type == 'UPDATE_NOTE'){
        return{
            notes: state.notes.map((note) =>
          note.id === action.payload.id ? { ...note, ...action.payload } : note
        )
      
        }
    }
    else{
        return state
    }
}

export default rootReducer