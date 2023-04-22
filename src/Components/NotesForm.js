import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/action';


export default function NotesForm() {

  let [title, setTitle] = useState('');
  let [content, setContent] = useState('')

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmission(e){
    e.preventDefault();
    dispatch(addNote(title, content))
    setTitle('')
    setContent('')
    navigate('/allNotes')
  }

  return (
    <div className='formContainer'>
        <h3>React Notes App</h3>
        <form onSubmit={handleSubmission}>
            Title <br/>
            <input type='text' name='title' value={title} placeholder='enter title' onChange = {(e)=> setTitle(e.target.value)} required/> <br/>
            Content <br/>
            <input type='text' name='content' value={content} placeholder='enter content' onChange = {(e)=> setContent(e.target.value)} required/> <br/>
            <br/>
            <button class="button-29" role="button">Add note</button>
           
        </form>
    </div>
  )
}
