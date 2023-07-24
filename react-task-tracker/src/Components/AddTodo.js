import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("")
  let formStyle = {
    marginTop:"20px"
  }
  const submit = (e) => {
    // e.preventDefault();
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be blank");
    }
    else{
      addTodo(title,desc)
      setTitle("");
      setDesc("");
    }
    }

  return (
    <div className="container mt-5">
    <form onSubmit = {submit}>
      <div className="form-group">
        <label htmlFor="todoTitle">Todo Title</label>
        <input type="text" className="form-control" value = {title} onChange = {(e)=>{setTitle(e.target.value)}}id="todoTitle" />
      </div>
      <div className="form-group">
        <label htmlFor="todoDescription">Todo Description</label>
        <textarea className="form-control" id="todoDescription" value = {desc} onChange = {(e)=>{setDesc(e.target.value)}} rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-success btn-sm" style = {formStyle}>Add Todo</button>
    </form>
  </div>
  )
}
