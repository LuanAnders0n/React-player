import React, { useState } from "react";


const Form = ({setYoutubeLink}) => {
const [input, setInput] = useState('')
const handleSubmit=(e)=>{
  e.preventDefault();
  setYoutubeLink(input)
  setInput('')
}

return(
  <form className="form-group custom-form" onSubmit={handleSubmit}>
    <label>Enter YouTube URL</label>
    <input type="text" className="form-group custom-input" 
    placeholder="Enter YouTube URL" required
    onChange={(e)=>setInput(e.target.value)} value={input|| ''}
    />

    <button type="submit" className="btn btn-sucess btn-md">Submit</button>
  </form>
)
}

export default Form
