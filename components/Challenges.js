import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CHALLENGESSECTION } from "../gqloperations/queries";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
const Challenges = () => {
  const { data, loading, error } = useQuery(GET_CHALLENGESSECTION, {
    variables: {
      slug: "challenges-section",
    },
  });
  // if (loading) return <h3>Loading</h3>;
  if (error) {
    console.log(error);
  }

  return (
    <>
      {loading && (
        <div className="container content-space-t-2 content-space-t-lg-3">
          <div className="row justify-content-lg-between align-items-lg-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <Skeleton height={350} />
            </div>

            <div className="col-lg-5">
              <div className="mb-5">
                <h2>
                  {" "}
                  <Skeleton />
                </h2>
                <p>
                  {" "}
                  <Skeleton count={4} />
                </p>
              </div>

              <ul className="list-checked list-checked-soft-bg-primary list-checked-lg mb-5">
                <li className="list-checked-item">
                  <Skeleton />
                </li>
                <li className="list-checked-item">
                  <Skeleton />
                </li>
                <li className="list-checked-item">
                  <Skeleton />
                </li>
              </ul>
              <Link href="#">
                <Skeleton />
              </Link>
            </div>
          </div>
        </div>
      )}
      {!loading &&
        data.homeSectionTypes.data.map(({ id, attributes }) => {
          return (
            <div
              key={id}
              className="container content-space-t-2 content-space-t-lg-3"
            >
              <div className="row justify-content-lg-between align-items-lg-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-3"
                    src={
                      attributes.post.data.attributes.images.data[0].attributes
                        .url
                    }
                    alt="Image Description"
                  />
                </div>

                <div className="col-lg-5">
                  <div className="mb-5">
                    <h2>{attributes.post.data.attributes.title}</h2>
                    <p>{attributes.post.data.attributes.description} </p>
                  </div>

                  <ul className="list-checked list-checked-soft-bg-primary list-checked-lg mb-5">
                    <li className="list-checked-item">
                      <span className="fw-bold">Easy &amp; fast</span>{" "}
                      Fumigation
                    </li>
                    <li className="list-checked-item">
                      Waste <span className="fw-bold">Management </span>
                    </li>
                    <li className="list-checked-item">Event Management</li>
                  </ul>
                  <Link href="/services/allservices">
                    <a className="btn btn-primary">Our services</a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Challenges;
