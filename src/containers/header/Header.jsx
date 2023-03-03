import React, { useRef } from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Header = () => {

  const notify = () => {
    toast("Email Sent!");
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_albwvw6", "template_ra1lb4h", form.current, "OM2Plw68aG1Cc2cQB")
      .then((result) => {
          console.log(result.text);
          notify()
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <form className="gpt3__header-content__input" ref={form} onSubmit={sendEmail} >
              <input required type="email" name="email" placeholder="Your Email Adress"/>
              <button type="submit" > Get Started </button>
          </form>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
        
      </div>
      </div>
  )
}

export default Header