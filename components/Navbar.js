import React from "react";
import { useQuery } from "@apollo/client";
import { GET_NAVBAR } from "../gqloperations/queries";
import Link from "next/link";
const Navbar = () => {
  const { data, loading, error } = useQuery(GET_NAVBAR);
  if (loading) {
    return <h3>Loading</h3>;
  }
  if (error) {
    console.log(error);
  }

  console.log("nav", data);

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-light nav"
      style={{
        backgroundColor: "white",
        boxShadow: "black 0px -4px 8px 0px",
      }}
    >
      <div className="container-fluid" style={{ maxWidth: "1097px" }}>
        <a className="navbar-brand" href="#">
          <img src="/imgs/newlogo.jpg" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {data.navbar.data.attributes.navigation.panels.map(
              ({ id, link, section }) => {
                return (
                  <>
                    {section !== null ? (
                      <li key={id} className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href={`/services${link.href}`}
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-hover="dropdown"
                        >
                          {link.label}
                        </a>

                        {section.links && (
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            {section.links.map((id, link) => {
                              return (
                                <li key={id}>
                                  <Link href={`/services${link.href}`}>
                                    <a
                                      className="dropdown-item"
                                      target={link.target}
                                    >
                                      {link.label}
                                    </a>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li key={id} className="nav-item">
                        <Link href={link.href}>
                          <a className="nav-link " aria-current="page">
                            {link.label}
                          </a>
                        </Link>
                      </li>
                    )}
                  </>
                );
              }
            )}
          </ul>
          <div className="d-flex">
            <i
              className="bi bi-facebook"
              style={{ fontSize: "25px", color: "blue" }}
            ></i>

            <i
              className="bi bi-twitter"
              style={{ fontSize: "25px", color: "blue", marginLeft: "22px" }}
            ></i>
            <i
              className="bi bi-youtube"
              style={{ fontSize: "28px", color: "red", marginLeft: "22px" }}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
