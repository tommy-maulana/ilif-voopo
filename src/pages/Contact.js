import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import ContactForm from "../containers/contact/contact-form";
import ContactMap from "../containers/contact/contact-map";

const Contact = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Contact</title>
        <meta
          name="description"
          content="Contact page of React VOIP, Telecom and Cloud Services Template."
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Contact" />
        {/* contact form */}
        <ContactForm />
        {/* contact map */}
        <ContactMap />
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
