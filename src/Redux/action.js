export function addNote(title, content){
    return{
        type:'ADD_NOTE',
        title:title,
        content:content
    }
}

export function removeNote(id){
    return{
        type:'REMOVE_NOTE',
        id:id
    }
}
