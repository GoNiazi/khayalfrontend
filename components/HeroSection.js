import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HEROSECTION } from "../gqloperations/queries";
import Link from "next/link";

const HeroSection = () => {
  const { data, loading, error } = useQuery(GET_HEROSECTION, {
    ssr: true,
    variables: {
      slug: "hero-section",
    },
  });
  if (loading) return <h3>Loading</h3>;
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log("hero", data);
  }
  return (
    <>
      {data.homeSectionTypes.data.map(({ id, attributes }) => {
        return (
          <div key={id} className="container content-space-t-3">
            <div className="row justify-content-lg-between align-items-lg-center">
              <div className="col-lg-5 mb-5 mb-lg-0">
                <div className="mb-5">
                  <h1 className="display-4 text-dark mb-5">
                    Start your journey with{" "}
                    <span className="text-primary">Khayal</span>
                  </h1>
                  <p className="fs-3">
                    {attributes.post.data.attributes.description}{" "}
                  </p>
                </div>

                <div className="d-grid d-sm-flex gap-3 mb-5">
                  <Link href="/about-us">
                    <a className="btn btn-primary">About Us</a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="position-relative">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={
                        attributes.post.data.attributes.images.data[0]
                          .attributes.url
                      }
                      alt="Image Description"
                    />

                    <div className="position-absolute bottom-0 end-0">
                      <img
                        className="w-100"
                        src="./imgs/1.svg"
                        alt="SVG"
                        style={{ maxWidth: "30rem" }}
                      />
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

export default HeroSection;
