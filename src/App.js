import './App.css';
import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { useForm } from 'react-hook-form'
import { useState } from 'react'





export default function Form() {
  

  const { register, handleSubmit, reset,formState: { errors } } = useForm()
  const [emp, initemp] = useState(null)
  
  
  useEffect(() => {

        initemp({
          name: '',
          email: '',
          password: '',
        })
   
  }, [])
  
  useEffect(() => {
    reset(emp)
  }, [emp])

  //data reset on reset button
  function onFormSubmit(dataRes) {
    console.log(dataRes);
    alert("Form submitted successfully")
    return false
  }

  return (
   
    <div className='main' >
      <h2>Registration</h2>
      {emp && (
       
        <form onSubmit={handleSubmit(onFormSubmit)}>
           
          <div className='name'>
          <div>
            <label>Name</label>
            <input type="text" name="name"
              {...register("name",{ required: true, maxLength: 10 })}
            />
          </div>
          {errors.name && <p>Please enter name</p>}

          <div >
            <label>Email</label>
            <input type="email" name="email"
              {...register("email", {
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
            />
          </div>
          {errors.email && <p>Please check the Email</p>}

          <div >
            <label>password</label>
            <input type="password" name="password"
              {...register("password",{ required: true, maxLength: 10 })}
            />
          </div>
          {errors.password && <p>Please enter Password</p>}

          <div className='btn' >
            <button type="submit" className=" btn-space" >Submit</button>
            <button type="button" className=" btn-space" onClick={() =>
                reset({
                  name: '',
                  email: '',
                  password: '',
                })
              }

            >
              Reset
            </button>
            
          </div>
          </div>
         
        </form>
       
      )}
    </div>
    
    
  )
}
