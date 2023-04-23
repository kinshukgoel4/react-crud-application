import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/action';
import './NotesForm.css'


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
            <style>
        {`
          .formContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 3rem;
          }

          h3 {
            margin-bottom: 2rem;
            font-size: 2rem;
          }

          input {
            width: 80%;
            margin: 0.5rem;
            padding: 0.5rem;
            font-size: 1rem;
            border-radius: 4px;
            border: 1px solid #ddd;
          }

          button {
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            border: none;
            color: #fff;
            background-color: #0095ff;
            cursor: pointer;
            margin-top: 1rem;
          }

          button:hover {
            background-color: #0077cc;
          }
        `}
      </style>
        </form>
    </div>
  )
}
