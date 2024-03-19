// Form.js
import React, { useState } from 'react';

function Form() {

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.16)',
    borderRadius: '16px',
    padding: '45px', 
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter:'blur(3.3px)',
    border: '1px solid rgba(255, 255, 255, 0.42)'
  };


  const inputStyle = {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '300px', // Increase width
    height: '40px', 
    background: 'transparent',

  };

  const textareaStyle = {
    ...inputStyle,
    width: '300px', // Increase width
    height: '150px',  
    resize:'none',
    background: 'transparent',

  };

  const buttonStyle = {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 0,
    fontSize: '14px',
    color: '#fff',
    width: '310px',
    backgroundColor: '#0066CC',
    padding: '10px 30px',
    border: '2px solid #0066cc',
    //boxShadow: 'rgb(250, 250, 250) -4px 5px 25px 5px',
    borderRadius: '50px',
    transition: '1000ms',
    transform: 'translateY(0)',

    alignItems: 'center',
    cursor: 'pointer',
  };



  const buttonHoverStyle = {
    fontFamily: 'Roboto, sans-serif',
    transition: '1000ms',
    padding: '10px 50px',
    transform: 'translateY(-0px)',
    backgroundColor: '#0066CC',
    color: '#FFF',
    border: 'solid 2px #f5cd07',
    fontWeight: 0,
    fontSize: '14px',
    width: '310px',
    alignItems: 'center',

  };



 

  const [hover, setHover] = React.useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [commentError, setCommentError] = useState('');

  const validateInput = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && value === '') {
      setNameError('Name is required');
    } else if (name === 'email' && !value.includes('@')) {
      setEmailError('Email is not valid');
    } else if (name === 'comment' && value === '') {
      setCommentError('Comment is required');
    } else {
      if (name === 'name') setNameError('');
      if (name === 'email') setEmailError('');
      if (name === 'comment') setCommentError('');
    }
  };

  return (
    <form style={formStyle}>
      <h2 className='formTitle'>Tell us about you! </h2>

      <label>Name:</label>
      <input 
        type="text" 
        name="name" 
        placeholder={nameError || "Name"} 
        onBlur={validateInput} 
        style={inputStyle} 
      />
      
      <label>Email:</label>
      <input 
        type="email" 
        name="email" 
        placeholder={emailError || "Email"} 
        onBlur={validateInput} 
        style={inputStyle} 
      />
      
      <label>Leave us a comment:</label>
      <textarea 
        name="comment" 
        placeholder={commentError || "Comment"} 
        onBlur={validateInput} 
        style={textareaStyle} 
      />
      
      <button 
        type="submit" 
        style={hover ? buttonHoverStyle : buttonStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;