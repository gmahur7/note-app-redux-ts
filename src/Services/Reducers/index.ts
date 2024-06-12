import { NoteActionTypes, NotesState } from "../../Interfaces";
import { ADD, DELETE } from "../Constant";

const initialState: NotesState = {
    notes: []
};

export const noteReducer = (state: NotesState = initialState, action: NoteActionTypes): NotesState => {
    switch (action.type) {
        case ADD:  return {
            ...state, notes: [...state.notes, action.payload]
        }
        case DELETE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            };
        default:
            return state;
    }
}