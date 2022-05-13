import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../gqloperations/queries";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const TrustedClients = () => {
  const { data, loading, error } = useQuery(GET_CLIENTS);
  // if (loading) return <h2>Loading</h2>;
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
  return (
    <>
      {loading && (
        <div className="container content-space-1">
          <div className="w-lg-75 text-center mx-lg-auto mb-10">
            <h2>Our Trusted Clients</h2>
          </div>

          <div className="row justify-content-center text-center">
            <div className="col-4 col-sm-3 col-md-2 py-3">
              {[1, 2, 3, 4, 5].map((n) => {
                return (
                  <p>
                    <Skeleton height={60} />
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {!loading && (
        <div className="container content-space-1">
          <div className="w-lg-75 text-center mx-lg-auto mb-10">
            <h2>Our Trusted Clients</h2>
          </div>

          <div className="row justify-content-center text-center">
            {data.clients.data.map(({ id, attributes }) => {
              return (
                <>
                  <div key={id} className="col-4 col-sm-3 col-md-2 py-3">
                    <img
                      className="avatar avatar-lg avatar-4x3 avatar-centered"
                      src={attributes.logo.data.attributes.url}
                      alt="Logo"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TrustedClients;
