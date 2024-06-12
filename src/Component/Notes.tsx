import React, { FunctionComponent } from 'react'
import { Box, Button, Card, CardContent, Typography,styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Services/Reducers/rootReducers'
import { deleteNoteHandler } from '../Services/Actions/Action'

const StyleCard = styled(Card)`
    width:400px;
    margin:20px;
`

const Wrapper  = styled(Box)`
  &>button {
  border:1px solid black;
  background:white;
  margin-top:5px;
  }
`

const StyleNotes = styled(Box)`
  display:flex;
  flex-wrap:wrap;
`

const Notes: FunctionComponent = () => {

  const dispatch=useDispatch()
  const notes = useSelector((state:RootState) => state.noteReducer.notes);

  const deleteNote=(id:number|undefined)=>{
    if (id !== undefined) {
      dispatch(deleteNoteHandler(id));
    }
  }

  return (
    <Box>
      <Typography variant='h5'>Notes</Typography>
      {notes.length>0 &&
        <StyleNotes>
          {notes.map((note) =>
            <StyleCard key={note.id} style={{backgroundColor:note.color}}>
              <CardContent>
                <Wrapper>
                  <Typography variant='h5'>{note.title}</Typography>
                  <Typography>{note.note}</Typography>
                  <Typography>{note.date}</Typography>
                  <Button onClick={()=>deleteNote(note.id)}>Delete</Button>
                </Wrapper>
                </CardContent>
            </StyleCard>
          )}
        </StyleNotes>}
    </Box>
  )
}

export default Notes