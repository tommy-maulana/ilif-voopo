import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import BlogFeatured from "../containers/blog/blog-featured";
import BlogPostWithSidebar from "../containers/blog/blog-post-with-sidebar";

const Blog = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Blog</title>
        <meta
          name="description"
          content="Blog page of React VOIP, Telecom and Cloud Services Template."
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Voopo News" />
        {/* blog featured */}
        <BlogFeatured />
        {/* blog post with sidebar */}
        <BlogPostWithSidebar />
      </LayoutOne>
    </Fragment>
  );
};

export default Blog;
