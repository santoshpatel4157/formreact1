import React,{useState} from 'react';  
import { useFormik } from 'formik';  
import Checkbox from './checkbox';

  
export default function Jsondata() {  
  const [first,setfirst]=useState(true);
  const [second,setsecond]=useState(true);
  
  const formik = useFormik({  
    initialValues: {  
      firstName: '', 
      lastName:'',  
      contactNumber: '',  
      email: '',
      password:'',
      city: '', 
      address: '',
      file:'' ,
      gender:'',
      checkbox:'',
    },  
    onSubmit: values => {  
      console.log(values);
      formik.resetForm();  
    }  
  });  
  
  return (  

    <div >  
            <Checkbox/>
      <div >  
        <h1> Survey </h1>  
        <form onSubmit={formik.handleSubmit}>  
          <div >  
            <label> First Name </label>  
            <input type="text" {...formik.getFieldProps('firstName')} />  
          </div>   
          <div >  
            <label> Last Name </label>  
            <input type="text" {...formik.getFieldProps('lastName')} />  
          </div>  
          <div >  
            <label> Contact Number </label>  
            <input type="text" {...formik.getFieldProps('contactNumber')} />  
          </div>   
          <div >  
            <label> Email Id </label>  
            <input type="text" {...formik.getFieldProps('email')} />  
          </div>  
          <div>  
            <label> Password </label>  
            <input type="password" {...formik.getFieldProps('password')} />  
          </div> 
          <div >  
            <label> City </label>  
            <select {...formik.getFieldProps('city')}>  
              <option value="">Select</option>  
              <option value="rajkot">Rajkot</option>  
              <option value="ahmedabad">Ahmedabad</option>
              <option value="junagadh">Junagadh</option>   
              <option value=" mumbai">Mumbai</option>  
            </select>  
          </div> 
          <div>
          <label
          {...formik.getFieldProps('gender')}> 
       
              male:<input type="radio" name="gender" value="male" />       
              Female:<input type="radio" name="gender" value="female"/>
         </label>
           </div>     
          
           
          <div >  
            <label> Address </label>  
            <textarea type="text" {...formik.getFieldProps('address')} />  
          </div>
          <div>  
            <label>  </label>  
            <input type="file" {...formik.getFieldProps('file')} />  
          </div> 

           <div>
          first<input type="checkbox" value={first} {...formik.getFieldProps('checkbox')}/>
          second<input type="checkbox" value={second} {...formik.getFieldProps('checkbox')} />
          </div>
 
          <div>  
            <button type="submit">  
              Submit  
            </button>  
            <button  
              type="reset"   
              onClick={formik.resetForm}  
            >  
              Reset  
            </button>  
          </div>  
        </form>  
      </div>
     
      </div>  
   
  );  
}  
