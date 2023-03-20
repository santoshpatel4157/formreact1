import React, { useState } from 'react';

function Check() {
  const [formState, setFormState] = useState({ firstName: '', option: '', radio: '', checkbox1: false, checkbox2: false, checkbox3: false });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  
      console.log(formState);
      
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </label>
      <br />
      <label>
        Select an option:
        <select name="option" value={formState.option} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {errors.option && <span className="error">{errors.option}</span>}
      </label>
      <br />
      <label>
        Select a radio button:
        <input type="radio" name="radio" value="radio1" checked={formState.radio === 'radio1'} onChange={handleChange} />
        Radio 1
        <input type="radio" name="radio" value="radio2" checked={formState.radio === 'radio2'} onChange={handleChange} />
        Radio 2
        <input type="radio" name="radio" value="radio3" checked={formState.radio === 'radio3'} onChange={handleChange} />
        Radio 3
        {errors.radio && <span className="error">{errors.radio}</span>}
      </label>
      <br />
      <label>
        Checkboxes:
        <br />
        <input type="checkbox" name="checkbox1" checked={formState.checkbox1} onChange={handleChange} />
        Checkbox 1
        <br />
        <input type="checkbox" name="checkbox2" checked={formState.checkbox2} onChange={handleChange} />
        Checkbox 2
        <br />
        <input type="checkbox" name="checkbox3" checked={formState.checkbox3} onChange={handleChange} />
        Checkbox 3
        <br />
        </label>
        <button type="submit">  
              Submit  
            </button> 
        </form>
  )
}
export default Check;
