import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import HeroSliderTwo from "../containers/hero-sliders/hero-slider-two";
import ServiceTwo from "../containers/services/service-two";
import ServiceThree from "../containers/services/service-three";
import SoftwareDownloadTwo from "../containers/software-downloads/software-download-two";
import PricingTableOne from "../containers/pricing-tables/pricing-table-one";
import WorkProcess from "../containers/work-process/work-process-one";
import ContactFaqOne from "../containers/contact-faqs/contact-faq-one";

const HomeTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Home Two</title>
        <meta
          name="description"
          content="Homepage of React VOIP, Telecom and Cloud Services Template."
        />
      </MetaTags>
      <LayoutOne footerBg="white">
        {/* hero slider */}
        <HeroSliderTwo />
        {/* service */}
        <ServiceThree />
        {/* service with text */}
        <ServiceTwo />
        {/* software download */}
        <SoftwareDownloadTwo />
        {/* working process */}
        <WorkProcess />
        {/* pricing table */}
        <PricingTableOne background="none" />
        {/* contact faq */}
        <ContactFaqOne />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeTwo;
