import "./form.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
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
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <div class="htmlForm">
          <div class="title">Welcome</div>
          <div class="subtitle">Let's send an email!</div>
          <div class="input-container ic1">
            <input class="input" type="text" placeholder=" " name="full_name" />
            <div class="cut"></div>
            <label htmlFor="firstname" class="placeholder">
              Senders Name
            </label>
          </div>

          <div class="input-container ic2">
            <input
              class="input"
              type="email"
              placeholder=" "
              name="user_email"
            />
            <div class="cut"></div>
            <label htmlFor="firstname" class="placeholder">
              Sender's Email
            </label>
          </div>

          <div class="input-container ic2">
            <input
              class="input"
              type="email"
              placeholder=" "
              name="receive_email"
            />
            <div class="cut"></div>
            <label htmlFor="firstname" class="placeholder">
              Recipient's Email
            </label>
          </div>

          <div class="input-container ic2">
            <input class="input" type="text" placeholder=" " name="subject" />
            <div class="cut"></div>
            <label htmlFor="lastname" class="placeholder">
              Subject
            </label>
          </div>

          <div class="input-container ic2">
            <textarea
              class="input-textarea"
              placeholder="Message"
              cols="30"
              rows="10"
              name="message"
            />
            <div class="cut"></div>
          </div>
          <button type="text" class="submit">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
