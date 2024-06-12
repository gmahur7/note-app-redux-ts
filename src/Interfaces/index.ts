import { ADD,DELETE } from "../Services/Constant";

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
}

export interface RemoveNoteAction {
    type: typeof DELETE;
    payload: { id: number };
  }

export type NoteActionTypes = AddTaskAction | RemoveNoteAction;