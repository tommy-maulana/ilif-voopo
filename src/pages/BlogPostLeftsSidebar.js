import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import PostDetailsWithSidebar from "../containers/blog/post-details-with-sidebar";

const BlogPostLeftSidebar = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Voopo | Blog Post</title>
        <meta
          name="description"
          content="Blog Post page of React VOIP, Telecom and Cloud Services Template."
        />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Blog Post" />
        {/* post details with sidebar */}
        <PostDetailsWithSidebar sidebarPosition="left" />
      </LayoutOne>
    </Fragment>
  );
};

export default BlogPostLeftSidebar;
