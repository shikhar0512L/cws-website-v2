import React , {useState} from 'react';
import {db} from "../firebase";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    db.collection('contacts').add({
      name:name,
      email:email,
      message:message
    })
    .then(()=>{
      alert('Message sent successfully');
    })
    .catch(err=>{
      alert(err.message);
    })

    setName("");
    setEmail("");
    setMessage("");

  }


  return (
    <div className="flex flex-col items-center justify-center">
        <form className="justify-center items-center" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=> setName(e.target.value) }/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value) }/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
    <textarea type="text" className="form-control" id="exampleInputPassword1" value={message} onChange={(e)=> setMessage(e.target.value) }/>
  </div>
  <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Submit</button>
</form>
    </div>
  )
}

export default Contact;