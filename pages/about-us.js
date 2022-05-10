import React from "react";
import Layout from "../components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container content-space-t-3 content-space-t-lg-4">
        <div className="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
          <h1 className="display-4">About</h1>
          <p className="lead">
            Khayal Facilities Management (KFM) is a modern services providers in
            facilities, and human resource management company that is driven by
            its commitment to excellence
          </p>
        </div>

        <div
          className="position-relative bg-img-center min-vh-35 min-vh-md-75"
          style={{ backgroundImage: "url('/imgs/5.jpg')" }}
        >
          <div
            className="position-absolute bottom-0 start-0 start-md-auto end-0 text-center text-md-start p-4 mx-auto mx-md-0"
            style={{ maxWidth: "25rem" }}
          >
            <div className="d-inline-block bg-white rounded-3 p-3 p-md-5">
              <div className="d-none d-md-block mb-10">
                <h3>How does Khayal work?</h3>
                <p>Learn more about Khayal.</p>
              </div>

              <a
                className="link link-dark"
                href="https://www.youtube.com/watch?v=d4eDWc8g0e0"
                role="button"
                data-fslightbox="youtube-video"
              >
                <i className="bi-play-circle me-1"></i> Watch our story
              </a>
            </div>
          </div>
        </div>

        <div className="d-md-none text-center mt-5">
          <h3>How does Khayal work?</h3>
          <p>Learn more about Khayal.</p>
        </div>
      </div>

      <div className="container content-space-2 content-space-lg-3">
        <div className="row justify-content-lg-between">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2>Work environment</h2>
            <p>
              Lead by a team of experienced, and qualified staff, KFM strives to
              provide services that are at par with international standards. We
              provide services and guidance that every business needs to wipe
              out inefficiency by creating an environment friendly and
              productive facility through integrating people, places, and
              process.
            </p>
            <p>
              We make sure that the places in which people work, play, learn and
              live are safe, comfortable, productive and sustainable. Adding to
              this the agenda of going green gives everyone equal ownership of a
              positive change towards our planet. We ensure that support
              provided by us is available in right form and quality and at
              market competitive cost.
            </p>
            <p>
              We are an equal opportunities employer and we aim to recruit,
              train and promote based on individual aptitudes and skills.
            </p>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className="d-grid gap-5">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <i className="bi-building fs-2"></i>
                </div>

                <div className="flex-grow-1 ms-4">
                  <h5>High quality Co-Living spaces</h5>
                  <p>
                    Our fully furnished spaces are designed and purpose-built
                    with Co-Living in mind, featuring high-end finishes and
                    amenities that go far beyond traditional apartment
                    buildings.
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <div className="flex-shrink-0">
                  <i className="bi-people fs-2"></i>
                </div>

                <div className="flex-grow-1 ms-4">
                  <h5>Fostering vibrant communities</h5>
                  <p>
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                </div>
              </div>

              <div className="d-flex">
                <div className="flex-shrink-0">
                  <i className="bi-shield-check fs-2"></i>
                </div>

                <div className="flex-grow-1 ms-4">
                  <h5>Simple and all-inclusive</h5>
                  <p>
                    We worry about the details so that our residents don't have
                    to. From our online application process to simple,
                    all-inclusive billing we aim to make the living experience
                    as effortless as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
