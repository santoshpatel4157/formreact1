import React,{useState} from 'react'
import { useForm } from 'react-hook-form'


export default function Checkbox() {
    const { handleSubmit } = useForm()
    const [first,setfirst]=useState(true);
    const [second,setsecond]=useState(true);
    const[gender,setgender]=useState();

    const handleChange=(data)=>{
        if(data==="first"){
            if(first===true){
            }
            setfirst(!first)
        }
        if(data==="second"){
            if(second===true){
            }
            setsecond(!second)
        }
        console.log(data);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>  
     
    <input type="checkbox" value={first} onChange={()=>handleChange("first")}/>first
    <input type="checkbox" value={second} onChange={()=>handleChange("second")}/>second
   
    <div className="radio"> 
      <label>
        <input type="radio" value="female" name="gender" onChange={e=>setgender(e.target.value)}/>
       female
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="male" name="gender" onChange={e=>setgender(e.target.value)}/>
       male
      </label>
    </div>
    <button type="submit">  
              Submit  
            </button>  
            </form>
    </>
  )
}
