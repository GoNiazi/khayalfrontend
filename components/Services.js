import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SOFT_SERVICES } from "../gqloperations/queries";
import Link from "next/link";

const Services = () => {
  const [post, setpost] = useState([]);
  const [skel, setskel] = useState(false);
  const { data, loading, error } = useQuery(GET_SOFT_SERVICES, {
    variables: {
      slug: "soft-services",
    },
  });

  if (loading) return <h1></h1>;
  if (error) {
    console.log(error);
  }
  post = data.services.data[0].attributes.posts.data.slice(0, 6);
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row">
        <div className="col-sm-6 col-lg-4 mb-5">
          <div className="text-center px-md-5">
            <div className="mb-3">
              <i className="bi-flower1 fs-1 text-dark"></i>
            </div>
            <p>{post[0].attributes.title}</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 mb-5">
          <div className="text-center px-md-5">
            <div className="mb-3">
              <i className="bi-basket2 fs-1 text-dark"></i>
            </div>
            <p>{post[1].attributes.title}</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 mb-5">
          <div className="text-center px-md-5">
            <div className="mb-3">
              <i className="bi-hdd-network fs-1 text-dark"></i>
            </div>
            <p>{post[2].attributes.title}</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 mb-5 mb-lg-0">
          <div className="text-center px-md-5">
            <div className="mb-3">
              <i className="bi-briefcase fs-1 text-dark"></i>
            </div>
            <p>{post[3].attributes.title}</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 mb-5 mb-sm-0">
          <div className="text-center px-md-5">
            <div className="mb-3">
              <i className="bi-sliders fs-1 text-dark"></i>
            </div>
            <p>{post[4].attributes.title}.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 mb-5 mb-lg-0">
          <div className="text-center px-md-5">
            <div className="mb-3">
              <i className="bi-water fs-1 text-dark"></i>
            </div>
            <p>{post[5].attributes.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
