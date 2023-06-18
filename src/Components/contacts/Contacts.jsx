import React from "react";
import "./contacts.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jgqt7mk",
        "template_76vf027",
        form.current,
        "FtYf8gCp9v3zZJK4h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contct__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__optio-icon" />
            <h4>Email</h4>
            <h5>abuomer582020@gmail.com</h5>
            <a href="mailto:abuomer582020@gmail.com">send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className="contact__optio-icon" />
            <h4>messenger</h4>
            <h5>kh.mohmed97@gmail.com</h5>
            <a href="https://m.me/name in the face">send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__optio-icon" />
            <h4>WhatsApp</h4>
            <h5>kh.mohmed97@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone+249121239919">
              send a message
            </a>
          </article>
          {/* end of contact */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-priary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
