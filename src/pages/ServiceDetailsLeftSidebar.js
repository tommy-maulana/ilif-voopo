import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import ServiceDetailsOne from "../containers/service-details/service-details-one";

const ServiceDetailsLeftSidebar = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Service Details</title>
        <meta
          name="description"
          content="Service details page of React VOIP, Telecom and Cloud Services Template."
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Service Details" />
        {/* service details */}
        <ServiceDetailsOne sidebarPosition="left" />
      </LayoutOne>
    </Fragment>
  );
};

export default ServiceDetailsLeftSidebar;
