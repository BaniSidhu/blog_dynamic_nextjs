import React, { useState } from 'react'
import "./contact.css"

function Contact() {
const [formData , setFormData] = useState({name:'',email:'' ,subject:"",message:""});
const [error,setError]=useState("");
const [success,setSuccess]=useState("");


const handleChange=(e: React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>)=>{
  setFormData({...formData,[e.target.value ]:e.target.value})
}


const  handleSubmit = async (e:React.ChangeEvent<HTMLElement>)=>{
  e.preventDefault();
  setError('')
  setSuccess('')

  try {
   const res= await fetch('/api/contact', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
if(!res.ok){

  const errorData= await res.json()
  setError(errorData.error)
  return;
};

setSuccess("Your data has been send successfully");
setFormData({name:'',email:'' ,subject:"",message:""})
 } catch (error) {
    setError("An error has occured the data doesn't save successfully")
  }

}

  return (
  <>
  
  <section id="contact">
          <form className="formcontact">
            <h1 className="ch1">
              Contact<span>Us</span>
            </h1>
            <div className="formTop">
              <input className="name" type="text"  name='name' value={formData.name} onChange={handleChange} placeholder="Name" />
              <input className="email" type="email" name='email' placeholder="Email" value={formData.email}onChange={handleChange} />
            </div>
            <div className="formBottom">
              <input className="subject" type="text" placeholder="Subject" value={formData.subject}onChange={handleChange} />
              <textarea className="message" placeholder="Message" value={formData.message}onChange={handleChange} ></textarea>
              <input className="submit" type="submit" value="Send Now!"onChange={handleSubmit} />
            </div>
          </form>
        </section>
  </>
  )
}

export default Contact
