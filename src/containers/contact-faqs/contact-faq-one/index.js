import React from "react";
import styles from "./ContactFaqOne.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "../../../components/UI/button";
import { IoIosArrowRoundDown } from "react-icons/io";

const ContactFaqOne = () => {
  return (
    <div className="voopo__faq__area pb--120 bg--white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Accordion defaultActiveKey="0" className={styles.panoraAccordion}>
              <Card className={styles.card}>
                <Card.Header className={styles.accHeader}>
                  <h5>
                    <Accordion.Toggle variant="link" eventKey="0">
                      What Shipping Methods are Available?{" "}
                      <span>
                        <IoIosArrowRoundDown />
                      </span>
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className={styles.cardBody}>
                      There are many variations of passages Ipsum available, but
                      the majority words which suffered alteration in some form,
                      by injected humour, or randomised words which don't look
                      even slightly believable.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Card.Header className={styles.accHeader}>
                  <h5>
                    <Accordion.Toggle variant="link" eventKey="1">
                      What Payment Methods are Available?{" "}
                      <span>
                        <IoIosArrowRoundDown />
                      </span>
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <div className={styles.cardBody}>
                      There are many variations of passages Ipsum available, but
                      the majority words which suffered alteration in some form,
                      by injected humour, or randomised words which don't look
                      even slightly believable.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Card.Header className={styles.accHeader}>
                  <h5>
                    <Accordion.Toggle variant="link" eventKey="2">
                      How I Return back my product?{" "}
                      <span>
                        <IoIosArrowRoundDown />
                      </span>
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <div className={styles.cardBody}>
                      There are many variations of passages Ipsum available, but
                      the majority words which suffered alteration in some form,
                      by injected humour, or randomised words which don't look
                      even slightly believable.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Card.Header className={styles.accHeader}>
                  <h5>
                    <Accordion.Toggle variant="link" eventKey="3">
                      How can I track my order?{" "}
                      <span>
                        <IoIosArrowRoundDown />
                      </span>
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <div className={styles.cardBody}>
                      There are many variations of passages Ipsum available, but
                      the majority words which suffered alteration in some form,
                      by injected humour, or randomised words which don't look
                      even slightly believable.
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
          <div className="col-12 col-lg-6 sm__mt--40 md__mt--40 xs__mt--40">
            <div className={styles.faqInner}>
              <div className={styles.content}>
                <h2>Have Any Other Questions?</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <div className={styles.inputBox}>
                  <input type="email" placeholder="Enter your email address" />
                  <textarea
                    placeholder="Type your Question."
                    defaultValue={""}
                  />
                  <div className={styles.qusBtn}>
                    <Button type="button" text="Send" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFaqOne;
