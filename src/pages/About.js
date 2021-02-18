import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import FeatureImageTextOne from "../containers/feature-image-texts/feature-image-text-one";
import ServiceFive from "../containers/services/service-five";
import AboutContentOne from "../containers/about-contents/about-content-one";
import AboutContentTwo from "../containers/about-contents/about-content-two";

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | About</title>
        <meta
          name="description"
          content="About page of React VOIP, Telecom and Cloud Services Template."
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="About Us" />
        {/* feature */}
        <FeatureImageTextOne />
        {/* service five */}
        <ServiceFive />
        {/* about content */}
        <AboutContentOne />
        {/* about content */}
        <AboutContentTwo />
      </LayoutOne>
    </Fragment>
  );
};

export default About;
