// Form.js
import React from 'react';

function Form() {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <form style={formStyle}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="comment" placeholder="Comment" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;