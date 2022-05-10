import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_SERVICE } from "../../gqloperations/queries";
import Link from "next/link";
import Image from "next/image";

const SingleService = () => {
  const [ser, setser] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  const { data, loading, error } = useQuery(GET_SERVICE, {
    variables: {
      slug,
    },
  });

  if (error) {
    console.log(error);
  }
  if (data) {
    console.log("services:", data);
  }

  return (
    <Layout>
      <div className="container content-space-1 overflow-hidden">
        <div className="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
          {}
          <h2>
            The work we do,
            <br />
            and the people we help
          </h2>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 gx-7">
          {data ? (
            <>
              {data.services.data[0].attributes.posts.data.map(
                ({ id, attributes }) => {
                  return (
                    <>
                      <div className="col mb-5">
                        <a className="card card-ghost card-transition-zoom h-100">
                          {attributes.images.data[0] && (
                            <div className="card-pinned card-transition-zoom-item">
                              <Image
                                className="card-img"
                                src={attributes.images.data[0].attributes.url}
                                alt="Image Description"
                                style={{
                                  objectFit: "cover",
                                }}
                                height={365}
                                width={550}
                              />
                            </div>
                          )}

                          <div className="card-body">
                            <h4>
                              <span className="fw-medium">
                                {attributes.title}
                              </span>
                            </h4>
                            {attributes.description && (
                              <p className="card-text">
                                {attributes.description}
                              </p>
                            )}
                          </div>
                        </a>
                      </div>
                    </>
                  );
                }
              )}
            </>
          ) : (
            <h1>loading</h1>
          )}
        </div>

        <div className="text-center">
          <a
            className="btn btn-white btn-pointer"
            href="../page-customer-stories.html"
          >
            View All Services
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default SingleService;
