import React, { useState } from "react";
import Layout from "../components/Layout";
import { useMutation } from "@apollo/client";
import { USER_FEEDBACK } from "../gqloperations/queries";
import { API_URL } from "../url";
import axios from "axios";
import FormCheck from "react-bootstrap/FormCheck";
import Form from "react-bootstrap/Form";
const feedback = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [serviceshired, setserviceshired] = useState("");
  const [designation, setdesignation] = useState("");
  const [cellno, setcellno] = useState("");
  const [email, setemail] = useState("");
  const [comment, setcomment] = useState("");
  const [workorder, setworkorder] = useState("");
  const [organization, setorganization] = useState("");
  const [rate_experience, setrate_experience] = useState("");
  const [rate_satisfaction, setrate_satisfaction] = useState("");
  const [rate_delivery, setrate_delivery] = useState("");
  const [rate_attitude, setrate_attitude] = useState("");
  const [rate_professionalism, setrate_professionalism] = useState("");
  const [rate_prices, setrate_prices] = useState("");
  const [recommended, setrecommended] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const handleSubmit = async (e) => {
    const feedbackval = {
      firstname,
      lastname,
      serviceshired,
      designation,
      workorder,
      organization,
      email,
      cellno,
      rate_experience,
      rate_satisfaction,
      rate_delivery,
      rate_attitude,
      rate_professionalism,
      rate_prices,
      recommended,
      comment,
    };
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: feedbackval }),
    };
    const res = await fetch(`${API_URL}/api/userfeedbacks`, requestOptions);

    if (!res.ok) {
      console.log("error");
      seterror(true);
    } else {
      const feedback = await res.json();
      setsuccess(true);
      console.log("feedback", feedback);
    }
  };

  return (
    <Layout>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="w-lg-65 text-center mx-lg-auto mb-7">
          <h3>Feedback</h3>
        </div>

        <div className="row justify-content-lg-center">
          <div className="col-lg-8">
            <div className="card card-lg card-bordered shadow-none">
              <div className="card-body">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error.message}
                  </div>
                )}

                <Form onSubmit={handleSubmit}>
                  <div className="d-grid gap-4">
                    <div className="row">
                      <div className="col-sm-6 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstname"
                          id="blogContactsFormFirstName"
                          placeholder="First name"
                          aria-label="First name"
                          onChange={(e) => setfirstname(e.target.value)}
                          value={firstname}
                          required
                        />
                      </div>

                      <div className="col-sm-6">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormLasttName"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          id="blogContactsFormLasttName"
                          placeholder="Last name"
                          aria-label="Last name"
                          onChange={(e) => setlastname(e.target.value)}
                          value={lastname}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          Services Hired
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="serviceshired"
                          id="blogContactsFormFirstName"
                          placeholder="serivices Hired"
                          onChange={(e) => setserviceshired(e.target.value)}
                          value={serviceshired}
                          required
                        />
                      </div>

                      <div className="col-sm-6">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormLasttName"
                        >
                          Work Order #
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="workorder"
                          id="blogContactsFormLasttName"
                          placeholder="Designation"
                          aria-label="Last name"
                          onChange={(e) => setworkorder(e.target.value)}
                          value={workorder}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          Desigantion
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="designation"
                          id="blogContactsFormFirstName"
                          placeholder="serivices Hired"
                          onChange={(e) => setdesignation(e.target.value)}
                          value={designation}
                        />
                      </div>

                      <div className="col-sm-6">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormLasttName"
                        >
                          Organization
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="organization"
                          id="blogContactsFormLasttName"
                          placeholder="Designation"
                          aria-label="Last name"
                          onChange={(e) => setorganization(e.target.value)}
                          value={organization}
                        />
                      </div>
                    </div>

                    <span className="d-block">
                      <label
                        className="form-label"
                        htmlFor="blogContactsFormEmail"
                      >
                        Cell no
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="cellno"
                        id="blogContactsFormEmail"
                        placeholder="Phone no:"
                        aria-label="email@site.com"
                        onChange={(e) => setcellno(e.target.value)}
                        value={cellno}
                      />
                    </span>

                    <span className="d-block">
                      <label
                        className="form-label"
                        htmlFor="blogContactsFormEmail"
                      >
                        Your email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="blogContactsFormEmail"
                        placeholder="email@site.com"
                        aria-label="email@site.com"
                        onChange={(e) => setemail(e.target.value)}
                        values={email}
                      />
                    </span>
                    <div className="w-lg-65 text-center mx-lg-auto mb-7">
                      <h3>Customer Experience</h3>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          How would you rate your overall customer experience
                        </label>
                        <div className="mb-3">
                          <Form.Check
                            inline
                            label="Good"
                            name="group1"
                            type="radio"
                            value="good"
                            onChange={(e) => setrate_experience(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="fair"
                            name="group1"
                            type="radio"
                            value="fair"
                            onChange={(e) => setrate_experience(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="poor"
                            name="group1"
                            type="radio"
                            value="poor"
                            onChange={(e) => setrate_experience(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          How satisfied were you with our services
                        </label>
                        <div className="mb-3">
                          <Form.Check
                            inline
                            label="Good"
                            name="group2"
                            type="radio"
                            value="good"
                            onChange={(e) =>
                              setrate_satisfaction(e.target.value)
                            }
                          />
                          <Form.Check
                            inline
                            label="fair"
                            name="group2"
                            type="radio"
                            value="fair"
                            onChange={(e) =>
                              setrate_satisfaction(e.target.value)
                            }
                          />
                          <Form.Check
                            inline
                            label="poor"
                            name="group2"
                            type="radio"
                            value="poor"
                            onChange={(e) =>
                              setrate_satisfaction(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          How satisfied were you with the timeliness of delivery
                        </label>
                        <div className="mb-3">
                          <Form.Check
                            inline
                            label="Good"
                            name="group3"
                            type="radio"
                            value="good"
                            onChange={(e) => setrate_delivery(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="fair"
                            name="group3"
                            type="radio"
                            value="fair"
                            onChange={(e) => setrate_delivery(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="poor"
                            name="group3"
                            type="radio"
                            value="poor"
                            onChange={(e) => setrate_delivery(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          Attitude and behavior of our staff
                        </label>
                        <div className="mb-3">
                          <Form.Check
                            inline
                            label="Good"
                            name="group4"
                            type="radio"
                            value="good"
                            onChange={(e) => setrate_attitude(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="fair"
                            name="group4"
                            type="radio"
                            value="fair"
                            onChange={(e) => setrate_attitude(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="poor"
                            name="group4"
                            type="radio"
                            value="poor"
                            onChange={(e) => setrate_attitude(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          Professionalism of our staff
                        </label>
                        <div className="mb-3">
                          <Form.Check
                            inline
                            label="Good"
                            name="group5"
                            type="radio"
                            value="good"
                            onChange={(e) =>
                              setrate_professionalism(e.target.value)
                            }
                          />
                          <Form.Check
                            inline
                            label="fair"
                            name="group5"
                            type="radio"
                            value="fair"
                            onChange={(e) =>
                              setrate_professionalism(e.target.value)
                            }
                          />
                          <Form.Check
                            inline
                            label="poor"
                            name="group5"
                            type="radio"
                            value="poor"
                            onChange={(e) =>
                              setrate_professionalism(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          How would you rate our prices
                        </label>
                        <div className="mb-3">
                          <Form.Check
                            inline
                            label="Good"
                            name="group6"
                            type="radio"
                            value="good"
                            onChange={(e) => setrate_prices(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="fair"
                            name="group6"
                            type="radio"
                            value="fair"
                            onChange={(e) => setrate_prices(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="poor"
                            name="group6"
                            type="radio"
                            value="poor"
                            onChange={(e) => setrate_prices(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 mb-4 mb-sm-0">
                        <label
                          className="form-label"
                          htmlFor="blogContactsFormFirstName"
                        >
                          Would you recommend our product or service to others?
                        </label>
                        <div className="mb-3">
                          <Form.Check
                            inline
                            label="yes"
                            name="group7"
                            type="radio"
                            value="yes"
                            onChange={(e) => setrecommended(e.target.value)}
                          />
                          <Form.Check
                            inline
                            label="no"
                            name="group7"
                            type="radio"
                            value="no"
                            onChange={(e) => setrecommended(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="d-block">
                      <label
                        className="form-label"
                        htmlFor="blogContactsFormComment"
                      >
                        Comment
                      </label>
                      <textarea
                        className="form-control"
                        id="blogContactsFormComment"
                        name="comment"
                        placeholder="Leave your comment here..."
                        aria-label="Leave your comment here..."
                        rows="5"
                        onChange={(e) => setcomment(e.target.value)}
                        values={comment}
                      ></textarea>
                    </span>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
                <br />
                {success && (
                  <div className="alert alert-success" role="alert">
                    <span>Feedback Submitted</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default feedback;
