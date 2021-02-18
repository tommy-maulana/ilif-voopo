import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import SubscribeEmail from "../../../components/blog/blog-sidebar/SubscribeEmail";

import styles from "./BlogSidebar.module.scss";

const BlogSidebar = () => {
  return (
    <div className="voopoSidebar">
      {/* Start Serarch */}
      <div className={`${styles.vpWidget} ${styles.search} mb--60`}>
        <input type="text" placeholder="Search Here" />
        <button>
          <IoIosSearch />
        </button>
      </div>
      {/* End Serarch */}
      {/* Start Newsleter */}
      <div className={`${styles.vpWidget} ${styles.newsletter} mb--60`}>
        <h4>Subscribe to Newsletter</h4>
        <SubscribeEmail mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
      </div>
      {/* End Newsleter */}
      {/* Start Recent Post */}
      <div className={`${styles.vpWidget} ${styles.recentPostWrap} mb--60`}>
        <Tab.Container defaultActiveKey="recent">
          <Nav
            variant="pills"
            className={`${styles.voopoNav} nav justify-content-center`}
          >
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="recent">Recent</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="trending">Trending</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="recent" className={styles.singleTabContent}>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    <img
                      src={require("./../../../assets/images/blog/s1.jpg")}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Voopo Lounch their Business.
                    </Link>
                  </h4>
                  <span>13 Feb 2020</span>
                </div>
              </div>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    <img
                      src={require("./../../../assets/images/blog/s2.jpg")}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Three things about voopo.
                    </Link>
                  </h4>
                  <span>14 Feb 2020</span>
                </div>
              </div>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    <img
                      src={require("./../../../assets/images/blog/s3.jpg")}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Lorem ipsum dolor set amet.
                    </Link>
                  </h4>
                  <span>15 Feb 2020</span>
                </div>
              </div>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    <img
                      src={require("./../../../assets/images/blog/s4.jpg")}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Usefulness of VoIP in 2020.
                    </Link>
                  </h4>
                  <span>16 Feb 2020</span>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="trending" className={styles.singleTabContent}>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    <img
                      src={require("./../../../assets/images/blog/s3.jpg")}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Lorem ipsum dolor set amet.
                    </Link>
                  </h4>
                  <span>15 Feb 2020</span>
                </div>
              </div>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    <img
                      src={require("./../../../assets/images/blog/s4.jpg")}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Usefulness of VoIP in 2020.
                    </Link>
                  </h4>
                  <span>16 Feb 2020</span>
                </div>
              </div>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    <img
                      src={require("./../../../assets/images/blog/s1.jpg")}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Voopo Lounch their Business.
                    </Link>
                  </h4>
                  <span>13 Feb 2020</span>
                </div>
              </div>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                    <img
                      src={require("./../../../assets/images/blog/s2.jpg")}
                      alt="voopo voip"
                    />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + "/blog-post"}>
                      Three things about voopo.
                    </Link>
                  </h4>
                  <span>14 Feb 2020</span>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        {/* <div className="voopo__nav nav justify-content-center" role="tablist">
          <a
            className="nav-item nav-link active"
            data-toggle="tab"
            href="#recent"
            role="tab"
          >
            Recent
          </a>
          <a
            className="nav-item nav-link"
            data-toggle="tab"
            href="#trending"
            role="tab"
          >
            Trending
          </a>
        </div>
        <div className="voopo__tab__container">
          
        </div> */}
      </div>
      {/* End Recent Post */}
      {/* Start Newsleter */}
      <div className={`${styles.vpWidget} ${styles.banner} mb--60`}>
        <div className={styles.thumb}>
          <Link to={process.env.PUBLIC_URL + "/blog"}>
            <img
              src={require("./../../../assets/images/blog/banner.png")}
              alt="voopo voip"
            />
          </Link>
        </div>
      </div>
      {/* End Newsleter */}
      {/* Start Tag */}
      <div className={`${styles.vpWidget} ${styles.voopoTag}`}>
        <ul className={styles.tagList}>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Network</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>communication</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Voip</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Voopo</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Techno</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Telecom</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Network</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog"}>Cloud</Link>
          </li>
        </ul>
      </div>
      {/* End Tag */}
    </div>
  );
};

export default BlogSidebar;
