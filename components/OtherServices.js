import React from "react";

const OtherServices = () => {
  return (
    <div className="overflow-hidden" style={{ marginTop: "80px" }}>
      <div className="container position-relative content-space-1">
        <div className="row">
          <div className="col-lg-5 align-self-lg-end mb-7 mb-lg-0">
            <h2>
              We are willing to partner and grow with business and take on a
              role of a trusted business advisor
            </h2>
            <div
              className="d-none d-lg-flex justify-content-center mt-7"
              style={{ maxWidth: "15rem" }}
            >
              <img
                className="img-fluid"
                src="./imgs/arrow.svg"
                alt="Image Description"
              />
            </div>
          </div>

          <div className="col-lg-7 align-self-lg-center">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card card-shadow h-100">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="bi-emoji-smile fs-2 text-dark"></i>
                    </div>
                    <h4>Manage better</h4>
                    <p className="mb-0">A team that manages well</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card card-shadow h-100">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="bi-droplet fs-2 text-dark"></i>
                    </div>
                    <h4>Boosting creativity </h4>
                    <p className="mb-0">A team that assures quality</p>
                  </div>
                </div>
              </div>

              <div className="w-100"></div>

              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="card card-shadow h-100">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="bi-briefcase fs-2 text-dark"></i>
                    </div>
                    <h4>Built for business</h4>
                    <p className="mb-0">A smooth-running business</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card card-shadow h-100">
                  <div className="card-body">
                    <div className="mb-3">
                      <i className="bi-speedometer2 fs-2 text-dark"></i>
                    </div>
                    <h4>Keeping morale high </h4>
                    <p className="mb-0">A team that promises success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute top-0 start-0 w-100 w-lg-65 h-65 h-lg-100 bg-light rounded-3 zi-n1 ms-n5"></div>
      </div>
    </div>
  );
};

export default OtherServices;
