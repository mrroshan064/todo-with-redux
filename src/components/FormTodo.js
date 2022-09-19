import React,{useState} from 'react'

const FormTodo = ({addTodo}) => {
    const [val, setVal] = useState('')

    const handleClick = (e)=>{
        if(!val) return;
        addTodo(val);
        setVal("")
    }

  return (
    <div>

        <input type="text"  value= {val} onChange={(e)=>setVal(e.target.value)} placeholder="Add todo list"/>
        <button onClick={handleClick}> Add todo </button>

    </div>
  )
}

export default FormTodo;