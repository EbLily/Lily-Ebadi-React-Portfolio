import { useState } from 'react'
// import { validateEmail}
function Contact() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({username: false, email: false, message: false});
 
  const handleSubmit = (event) => {
      event.preventDefault();

      // What do we want to do with this info?
  }

  const handleBlur = (fieldName) => {
    setTouched(prev =>({...prev, [fieldName]: true}));
  }

  return (
    <>
    <div className="contact-container">
      <div>Contact</div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Enter Name:</label>
            <input 
              type="text" 
              id="name"
              onChange={(event) => setUsername(event.target.value)}
              onBlur = {() => handleBlur('username')}
              defaultValue={username}/>
              {touched.username && !username && <span className="error">Name is required</span>}
          </div>
          <div className="input-container">
            <label htmlFor="email">Enter Email:</label>
            <input 
              type="email" 
              id='email' 
              onChange={(event) => setEmail(event.target.value)}
              onBlur = {() => handleBlur('email')}
              defaultValue={email}/>
              {touched.email && !email && <span className="error">Email is required</span>}
          </div>
          <div className="input-container">
            <label htmlFor="message">Enter Message:</label>
            <input 
              type="textbox" 
              id="message" 
              onChange={(event) => setMessage(event.target.value)}
              onBlur = {() => handleBlur('message')}
              defaultValue={message}/>
            {touched.message && !message && <span>This Field is Required</span>}

          </div>
          <button type="submit">Submit Message</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default Contact