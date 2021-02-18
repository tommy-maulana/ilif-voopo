import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import HeroSliderOne from "../containers/hero-sliders/hero-slider-one";
import ServiceOne from "../containers/services/service-one";
import FeatureImageTextOne from "../containers/feature-image-texts/feature-image-text-one";
import ServiceTwo from "../containers/services/service-two";
import SoftwareDownloadOne from "../containers/software-downloads/software-download-one";
import PricingTableOne from "../containers/pricing-tables/pricing-table-one";
import ProductGrid from "../containers/product-grid/product-grid-one";
import BlogGrid from "../containers/blog-grid/blog-grid-one";

const HomeOne = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Home One</title>
        <meta
          name="description"
          content="Homepage of React VOIP, Telecom and Cloud Services Template."
        />
      </MetaTags>
      <LayoutOne>
        {/* hero slider */}
        <HeroSliderOne />
        {/* service */}
        <ServiceOne />
        {/* feature */}
        <FeatureImageTextOne />
        {/* service with text */}
        <ServiceTwo />
        {/* software download */}
        <SoftwareDownloadOne />
        {/* pricing table */}
        <PricingTableOne />
        {/* product grid */}
        <ProductGrid />
        {/* blog grid */}
        <BlogGrid />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeOne;
