import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMER_SATISFACTION_SECTION } from "../gqloperations/queries";
import Link from "next/link";

const CustomerSatisfaction = () => {
  const { data, loading, error } = useQuery(GET_CUSTOMER_SATISFACTION_SECTION, {
    variables: {
      slug: "customer-satisfaction-section",
    },
  });
  // if (loading) return <h3>Loading</h3>;
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log("sutomer", data);
  }
  return (
    <>
      {data.homeSectionTypes.data.map(({ id, attributes }) => {
        return (
          <div
            key={id}
            className="overflow-hidden "
            style={{ marginTop: "80px" }}
          >
            <div className="container">
              <div className="bg-dark rounded-3 p-4 p-sm-8 p-lg-10 mx-md-n7 mx-lg-n10">
                <div className="row align-items-lg-center">
                  <div className="col-lg-7 order-lg-2 mb-10 mb-lg-0">
                    <div className="position-relative">
                      <div className="w-75 ms-auto">
                        <img
                          className="img-fluid rounded-3"
                          src={
                            attributes.post.data.attributes.images.data[1]
                              .attributes.url
                          }
                          style={{ height: "485px" }}
                          alt="Image Description"
                        />
                      </div>

                      <div className="position-absolute bottom-0 start-0 mb-10 ms-5">
                        <img
                          className="img-fluid w-75 shadow rounded-3"
                          src={
                            attributes.post.data.attributes.images.data[0]
                              .attributes.url
                          }
                          alt="Image Description"
                        />
                      </div>

                      <figure
                        className="position-absolute top-0 end-0 mt-n7 me-n7"
                        style={{ maxWidth: "10rem" }}
                      >
                        <img
                          className="img-fluid"
                          src={
                            attributes.post.data.attributes.images.data[2]
                              .attributes.url
                          }
                          alt="Image Description"
                        />
                      </figure>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="pe-lg-5">
                      <div className="mb-5">
                        <h2 className="text-white">
                          {attributes.post.data.attributes.title}
                        </h2>
                        <p className="text-white-70">
                          {attributes.post.data.attributes.description}
                        </p>
                      </div>

                      <ul className="list-checked list-checked-soft-bg-primary list-checked-lg mb-5">
                        <li className="list-checked-item text-white-70">
                          Customize labels, packaging
                        </li>
                        <li className="list-checked-item text-white-70">
                          Custom branded tracking page
                        </li>
                        <li className="list-checked-item text-white-70">
                          FREE Email & SMS notifications
                        </li>
                      </ul>
                      <Link href="/feedback">
                        <a className="btn btn-primary btn-pointer">Feedback</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CustomerSatisfaction;
