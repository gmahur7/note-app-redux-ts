import { combineReducers } from "redux";
import { noteReducer } from "./index";
import { INote } from "../../Interfaces";

export interface RootState {
    noteReducer: {
      notes: INote[],
      toUpdateNote:INote
    };
  }

export default combineReducers({
    noteReducer
})

