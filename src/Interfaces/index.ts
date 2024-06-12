import { ADD,DELETE, UPDATE, UPDATE_ID } from "../Services/Constant";

export interface INote {
    id?: number,
    title: string,
    note: string,
    color: string,
    date?: string   
}

export interface AddTaskAction {
    type: typeof ADD;
    payload: INote;
}

export interface NotesState {
    notes: INote[];
    toUpdateNote : any
}

export interface RemoveNoteAction {
    type: typeof DELETE;
    payload: { id: number };
}

export interface UpdateIdNoteAction {
    type: typeof UPDATE_ID;
    payload: { id: number };
  }

export interface UpdateNoteAction {
    type: typeof UPDATE;
    payload: INote;
  }

export type NoteActionTypes = AddTaskAction | RemoveNoteAction | UpdateIdNoteAction | UpdateNoteAction ;