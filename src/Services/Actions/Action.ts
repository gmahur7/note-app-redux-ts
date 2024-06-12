import { AddTaskAction, INote } from "../../Interfaces"
import { ADD, DELETE } from "../Constant"
import { v4 as uuidv4 } from 'uuid';

export const addNoteHandler=(data:INote):any=>{
    return {    
        type:ADD,
        payload:{
            // id:Math.floor(Math.random()*899999+100000),
            id:uuidv4(),
            ...data,
            date:new Date().toLocaleString().toString()
        }
    }
}

export const deleteNoteHandler=(data:number):any=>{
    return {    
        type:DELETE,
        payload:{
            id:data
        }
    }
}