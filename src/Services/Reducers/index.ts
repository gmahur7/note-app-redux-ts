import { INote, NoteActionTypes, NotesState } from "../../Interfaces";
import { ADD, DELETE, UPDATE, UPDATE_ID } from "../Constant";


const defNote = {
    title:'',
    color:'',
    note:'',
    date:'',
    id:0
}
const initialState: NotesState = {
    notes: [],
    toUpdateNote : defNote
};

export const noteReducer = (state: NotesState = initialState, action: NoteActionTypes): NotesState => {
    switch (action.type) {
        case ADD:  return {
            ...state, notes: [...state.notes, action.payload],
            toUpdateNote:{}
        }
        case DELETE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id),
                toUpdateNote:{}
            }
        case UPDATE_ID : 
        // console.log(action.payload.id)
            let noteToUpdate = state.notes.filter(note=>note.id===action.payload.id)
            // console.log(noteToUpdate[0])
            return {
                ...state,
                toUpdateNote: noteToUpdate[0]
            }
        case UPDATE : 
            let update = state.notes.map((note,index)=>{
                if(action.payload.id===note.id){
                    return action.payload
                }
                else{
                    return note
                }
            })
            return {
                ...state,
                notes:update,
                toUpdateNote:defNote
            }
        default:
            return state;
    }
}