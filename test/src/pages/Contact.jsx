import { useState } from 'react'

function Contact() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();

      // What do we want to do with this info?
  }

  return (
    <>
      <div>Contact</div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Enter Name:</label>
            <input 
              type="text" 
              id="name"
              onChange={(event) => setUsername(event.target.value)}
              defaultValue={username}/>
          </div>
          <div className="input-container">
            <label htmlFor="email">Enter Email:</label>
            <input 
              type="email" 
              id='email' 
              onChange={(event) => setEmail(event.target.value)}
              defaultValue={email}/>
          </div>
          <div className="input-container">
            <label htmlFor="message">Enter Message:</label>
            <input 
              type="textbox" 
              id="message" 
              onChange={(event) => setMessage(event.target.value)}
              defaultValue={message}/>
          </div>
          <button type="submit">Submit Message</button>
        </form>
      </div>
    </>
  )
}

export default Contact