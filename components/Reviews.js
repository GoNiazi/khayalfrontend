import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../gqloperations/queries";
import Link from "next/link";

const Reviews = () => {
  const [review, setreview] = useState([]);
  const { data, loading, error } = useQuery(GET_REVIEWS);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log("reviews:", data);
  }
  review = data.reviews.data.slice(0, 4);
  console.log(review);
  return (
    <div className="container content-space-1">
      <div className="w-lg-75 mx-lg-auto">
        <div className="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
          <h2>Loved by business and individuals across the nation</h2>
        </div>

        <ul className="list-unstyled list-timeline list-py-3">
          <li className="list-timeline-item">
            <div className="card card-shadow">
              <div className="card-body">
                <div className="d-sm-flex">
                  <div className="flex-shrink-0 mb-3 mb-sm-0">
                    <img
                      className="avatar avatar-lg avatar-circle"
                      src={review[0].attributes.image.image.data.attributes.url}
                      alt="Image Description"
                    />
                  </div>

                  <div className="flex-grow-1 ms-sm-4">
                    <figure className="blockquote-sm">
                      <blockquote className="blockquote">
                        <em>{review[0].attributes.description}</em>
                      </blockquote>

                      <figcaption className="blockquote-footer">
                        {review[0].attributes.name}
                        <span className="blockquote-footer-source">
                          {review[0].attributes.company_name}
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="list-timeline-item ms-auto">
            <div className="card card-shadow">
              <div className="card-body">
                <div className="d-sm-flex">
                  <div className="flex-shrink-0 mb-3 mb-sm-0">
                    <img
                      className="avatar avatar-lg avatar-circle"
                      src={review[1].attributes.image.image.data.attributes.url}
                      alt="Image Description"
                    />
                  </div>

                  <div className="flex-grow-1 ms-sm-4">
                    <figure className="blockquote-sm">
                      <blockquote className="blockquote">
                        <em>{review[1].attributes.description}</em>
                      </blockquote>

                      <figcaption className="blockquote-footer">
                        {review[1].attributes.name}
                        <span className="blockquote-footer-source">
                          {review[1].attributes.company_name}
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="list-timeline-item">
            <div className="card card-shadow">
              <div className="card-body">
                <div className="d-sm-flex">
                  <div className="flex-shrink-0 mb-3 mb-sm-0">
                    <img
                      className="avatar avatar-lg avatar-circle"
                      src={review[2].attributes.image.image.data.attributes.url}
                      alt="Image Description"
                    />
                  </div>

                  <div className="flex-grow-1 ms-sm-4">
                    <figure className="blockquote-sm">
                      <blockquote className="blockquote">
                        <em>{review[2].attributes.description}</em>
                      </blockquote>

                      <figcaption className="blockquote-footer">
                        {review[2].attributes.name}
                        <span className="blockquote-footer-source">
                          {review[2].attributes.company_name}
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="list-timeline-item ms-auto">
            <div className="card card-shadow">
              <div className="card-body">
                <div className="d-sm-flex">
                  <div className="flex-shrink-0 mb-3 mb-sm-0">
                    <img
                      className="avatar avatar-lg avatar-circle"
                      src={review[3].attributes.image.image.data.attributes.url}
                      alt="Image Description"
                    />
                  </div>

                  <div className="flex-grow-1 ms-sm-4">
                    <figure className="blockquote-sm">
                      <blockquote className="blockquote">
                        <em>{review[3].attributes.description}</em>
                      </blockquote>

                      <figcaption className="blockquote-footer">
                        {review[3].attributes.name}
                        <span className="blockquote-footer-source">
                          {review[3].attributes.company_name}
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
