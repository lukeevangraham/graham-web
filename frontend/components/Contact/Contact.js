import { useState } from "react";
import Button from "../UI/Button/Button";

import classes from "./Contact.module.scss";

const Contact = () => {
  //   const [userName, setUserName] = useState("");
  //   const [userEmail, setUserEmail] = useState("");
  //   const [userPhone, setUserPhone] = useState("");
  //   const [userBody, setUserBody] = useState("");
  let [messageStatus, setMessageStatus] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    setMessageStatus(1);

    console.log(event.target.name.value);

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        body: event.target.body.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log("RES: ", result);
    result.status === 200 ? setMessageStatus(200) : null;
  };

  let messageForm = "";

  switch (messageStatus) {
    case 0:
      break;
    case 200:
      messageForm = (
        <div>
          <h3>Your message was successfully delivered</h3>
        </div>
      );
      break;
    case 1:
      messageForm = <div>Sending...</div>;
      break;
    default:
      messageForm = (
        <form onSubmit={sendMessage}>
          <div className={classes.contactForm}>
            <input
              className={`${classes.contactForm__input} ${classes.contactForm__inputName}`}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            {/* <label htmlFor="name">Your Name</label> */}
            <input
              className={`${classes.contactForm__input} ${classes.contactForm__inputEmail}`}
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <input
              className={`${classes.contactForm__input} ${classes.contactForm__inputPhone}`}
              type="text"
              name="phone"
              id="phone"
              placeholder="Your Phone"
            />

            <textarea
              className={`${classes.contactForm__input} ${classes.contactForm__message}`}
              type="text"
              name="body"
              id="body"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className={classes.sendButton}>
            Send Message
          </button>
        </form>
      );
      break;
  }

  return <>{messageForm}</>;
};

export default Contact;
