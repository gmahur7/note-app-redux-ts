import { Box, Button, InputBase,Typography,styled } from '@mui/material'
import React,{FunctionComponent, useState} from 'react'
import { INote } from '../Interfaces'
import { useDispatch } from 'react-redux'
import { addNoteHandler } from '../Services/Actions/Action'

const Container = styled(Box)`
    & > * {
    margin:20px 20px 20px 0;
    }

    &>div>input[type="text"] {
    border-bottom:1px solid #111111;
    opacity:0.4;
    width:300px;
    padding-right:25px;
    }

    &>div>input[type="color"] {
    width:40px;
    height:30px;
    position:relative;
    bottom:-10px;
    }

    & > span {
    font-size:10px;
    position:relative;
    }
`

const Error = styled(Typography)`
  background-color:red;
  color:white;
  padding:10px;
  width:40%;
`

const newNote:INote = {
    title: '',
    note: '',
    color: '#fff',
  };

const CreateNote:FunctionComponent = () => {
    const dispatch = useDispatch();
    const [note,setNote]=useState<INote>(newNote)
    const [error, setError] = useState(false)

    const handleInput=(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    const createNote=()=>{
        if(!note.title||!note.note) {
            setError(true)
            return
        }
          dispatch(addNoteHandler(note))
          setNote(newNote)
          setError(false)
    }

  return (
    <Container>
        <InputBase placeholder='title' value={note.title} name="title" inputProps={{maxLength:30}} onChange={(e)=>handleInput(e)}/>
        <Box component={'span'}>{note.title.length}/30</Box>
        <InputBase placeholder='note' name="note" value={note.note} inputProps={{maxLength:80}} onChange={(e)=>handleInput(e)}/>
        <Box component={'span'}>{note.note.length}/80</Box>
        <InputBase type="color" placeholder='choose color' value={note.color} name="color" onChange={(e)=>handleInput(e)}/>
        <Button variant="outlined" onClick={createNote}>Create</Button>
        {error&&!note.title&&<Error>Note Title is required</Error>}
        {error&&!note.note&&<Error>Note is required</Error>}
    </Container>
  )
}

export default CreateNote