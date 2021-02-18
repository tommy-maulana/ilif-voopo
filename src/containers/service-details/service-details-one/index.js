import React from "react";
import serviceImage from "../../../assets/images/bg/2.jpg";
import ServiceSidebar from "../service-sidebar";

const ServiceDetailsOne = ({ sidebarPosition }) => {
  return (
    <div className="page-wrapper ptb--110">
      {/*Service section start*/}
      <div className="service-section">
        <div className="container">
          <div className="row">
            <div
              className={`col-lg-8 col-12 ${
                sidebarPosition && sidebarPosition === "left"
                  ? "order-1 order-lg-2"
                  : ""
              }`}
            >
              <div className="service-details">
                {/* service gallery */}
                <div className="service-gallery">
                  <img src={serviceImage} className="img-fluid" alt="" />
                </div>

                <div className="content pt--30">
                  <div className="row">
                    <div className="col-12">
                      <h2>Cloud Base Solutions</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione, sunt perspiciatis error id ipsa atque
                        unde quis dolore nobis eum aperiam enim blanditiis
                        pariatur inventore eius commodi consectetur ut. Totam,
                        assumenda! Laboriosam possimus, corporis dicta!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores aliquid quod, officiis unde nostrum
                        itaque! Adipisci dolorum, ab dolor, exercitationem
                        praesentium dolorem quo voluptatum itaque dignissimos,
                        sit esse cupiditate. Doloremque rerum similique a nobis
                        placeat in illum, quo quaerat, ut repellat, fuga itaque?
                        Nihil mollitia nisi, nam, accusantium nemo consequuntur
                        reiciendis autem dicta consequatur earum beatae dolor
                        distinctio, debitis repudiandae?
                      </p>
                    </div>
                    <div className="col-lg-6 col-12 pt--30">
                      <h3>Service Analysis</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugiat, animi? Vel quas in minima qui totam,
                        aliquid dolores quaerat voluptatum?
                      </p>
                    </div>
                    <div className="col-lg-6 col-12 pt--30">
                      <h3>Service Costing</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugiat, animi? Vel quas in minima qui totam,
                        aliquid dolores quaerat voluptatum?
                      </p>
                    </div>
                    <div className="col-lg-6 col-12 pt--30">
                      <h3>Service Planning</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugiat, animi? Vel quas in minima qui totam,
                        aliquid dolores quaerat voluptatum?
                      </p>
                    </div>
                    <div className="col-lg-6 col-12 pt--30">
                      <h3>Service Strategy</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fugiat, animi? Vel quas in minima qui totam,
                        aliquid dolores quaerat voluptatum?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-lg-4 col-12 ${
                sidebarPosition && sidebarPosition === "left"
                  ? "order-2 order-lg-1"
                  : ""
              }`}
            >
              {/* service sidebar */}
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>
      {/*Service section end*/}
    </div>
  );
};

export default ServiceDetailsOne;
