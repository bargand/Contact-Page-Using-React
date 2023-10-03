import React,{useState} from 'react'
import './Contact.css'



function Contact() {

  const [text,setText] = useState(" ")
  const [email,setEmail] = useState(" ")
  const [message,setMessage] = useState(" ")
  const handleOnChangeText = (event)=>{
    setText(event.target.value)
  }
  const handleOnChangeEmail = (event)=>{
    setEmail(event.target.value)
  }
  const handleOnChangemessage = (event)=>{
    setMessage(event.target.value)
  }
  const handlePreviewName = (event)=>{
    event.preventDefault()
    console.log(event)
    document.getElementsByClassName('UpperContainerHeading')[0].innerHTML = (`Hi ${text}, Your Message Was Sent Successfully`)
    setText(" ")
    setEmail(" ")
    setMessage(" ")
  }

  return (
    <div className='mainContainer'>
      <div className="UpperContainer">
        <h1 className='UpperContainerHeading'>Hi {text}, Sent Us A Message</h1>
      </div>
      <div className="LowerContainer">
      <div className="LeftContainer">
        <div className="LeftContainerUpper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tLBlhp0SA_0?si=ygN6S5pR7n262F9Y" title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="LeftContainerLower">
          <ul>
            <li><i className='bx bx-badge-check' style={{color:'#000'}} >Lorem ipsum dolor sit amet consectetur.</i></li>
            <li><i className='bx bx-badge-check' style={{color:'#000'}} >Lorem ipsum dolor sit.</i></li>
            <li><i className='bx bx-badge-check' style={{color:'#000'}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</i></li>
          </ul>
        </div>
      </div>
      <div className="RightContainer">
      <div className="container">
        <h2 style={{fontSize: '35px'}}>Contact Us</h2>
        <form>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input autoComplete="off" type="text" id="name" name="name" placeholder='Enter Your Name' onChange={handleOnChangeText} value={text} required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input autoComplete="off" type="text" id="email" name="email" placeholder='Enter Your Email' onChange={handleOnChangeEmail} value={email} required/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <input autoComplete="off" type="text" id="message" placeholder='Enter Your Valuable Message' name="message" onChange={handleOnChangemessage} value={message} required/>
            </div>
            <div className="form-group">
                <input type="submit" value="Submit" onClick={handlePreviewName}/>
            </div>
        </form>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
