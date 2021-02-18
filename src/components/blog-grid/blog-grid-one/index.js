import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogGridSingle = ({ data, styles, sliderClass }) => {
  return (
    <div
      className={`col-12 col-sm-6 col-lg-4 ${sliderClass ? sliderClass : ""}`}
    >
      <div className={styles.blog}>
        <div className={styles.thumb}>
          <Link to={process.env.PUBLIC_URL + data.url}>
            <img
              src={require("./../../../assets/images/blog-img/" + data.image)}
              alt="voopo voip"
            />
          </Link>
        </div>
        <div className={styles.blogInner}>
          <div className={styles.content}>
            <span>
              On {data.date} / By :{" "}
              <Link to={process.env.PUBLIC_URL + data.authorUrl}>
                {data.author}
              </Link>
            </span>
            <h2>
              <Link to={process.env.PUBLIC_URL + data.url}>{data.title}</Link>
            </h2>
            <p>{data.excerpt}</p>
          </div>
          <Link
            className={styles.readmoreBtn}
            to={process.env.PUBLIC_URL + data.url}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogGridSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default BlogGridSingle;
