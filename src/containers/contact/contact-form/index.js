import React from "react";
import styles from "./ContactForm.module.scss";
import Button from "../../../components/UI/button";
import contactThumb from "../../../assets/images/about/contact.png";

const ContactForm = () => {
  return (
    <div className="voopo__contact ptb--110">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.voopoContactForm}>
              <h2>
                If you need to contact us, Please fill out the form below.
              </h2>
              <form>
                <div className={styles.singleContactForm}>
                  <input type="text" name="name" placeholder="Type Your Name" />
                </div>
                <div className={styles.singleContactForm}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type Your e-mail"
                  />
                </div>
                <div className={`${styles.singleContactForm} message`}>
                  <textarea
                    name="message"
                    placeholder="Type Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className={styles.contactBtn}>
                  <Button type="button" text="Send" />
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 offset-lg-1">
            <div className={styles.contactThumb}>
              <img src={contactThumb} alt="voopo voip" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
