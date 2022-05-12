import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import Carousel from "react-multi-carousel";

const GalleryModal = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Modal
      {...props}
      style={{ height: "700px", borderRadius: "0px 10px 0px 0px" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Gallery</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {props.data.gallery.data.attributes.Images.data.map(
            ({ id, attributes }) => {
              return (
                <img
                  src={attributes.url}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              );
            }
          )}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryModal;
