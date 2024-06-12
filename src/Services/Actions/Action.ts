import { AddTaskAction, INote, UpdateIdNoteAction } from "../../Interfaces"
import { ADD, DELETE, UPDATE, UPDATE_ID } from "../Constant"
import { v4 as uuidv4 } from 'uuid';

export const addNoteHandler=(data:INote):any=>{
    return {    
        type:ADD,
        payload:{
            // id:Math.floor(Math.random()*899999+100000),
            id:`${uuidv4()}-${new Date().toLocaleString().toString()}`,
            ...data,
            date:new Date().toLocaleString().toString()
        }
    }
}

export const updateNoteHandler=(data:INote):any=>{
    return {    
        type:UPDATE,
        payload:{
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

export const setUpdateNoteHandler=(data:number):any=>{
    return {    
        type:UPDATE_ID,
        payload:{
            id:data
        }
    }
}