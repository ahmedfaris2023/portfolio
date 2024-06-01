import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // استيراد CSS لـ react-toastify

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9vi2c0a', 'template_f5uah7f', form.current, 'q6uZCVOMeJLB9CNp5'
)
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          toast.success('Message has been sent successfully!', {
            position: 'top-right' // تحديث الموضع هنا
          });
      }, (error) => {
          console.log('Failed to send email:', error.text);
          toast.success('Message has been sent successfully!.', {
            position: 'top-right' // تحديث الموضع هنا
          });
      });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">Contact us through the following fields</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" className="contact--input text-md" name="email" id="email" required />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input type="text" className="contact--input text-md" name="phone-number" id="phone-number" required />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" name="choose-topic" className="contact--input text-md">
            <option value="">Select One...</option>
            <option value="Front end">Front end</option>
            <option value="Back end">Back end</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea className="contact--input text-md" name="message" id="message" rows="8" placeholder="Type your message..." />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}