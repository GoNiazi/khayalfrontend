import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_GALLERY } from "../gqloperations/queries";
import Link from "next/link";
import GalleryModal from "../components/GalleryModal";
const Gallery = () => {
  const [pics, setpics] = useState([]);
  const [modalShow, setmodalShow] = useState(false);
  const { data, loading, error } = useQuery(GET_GALLERY);
  if (loading) {
    return <h2>Loading</h2>;
  }
  if (error) {
    console.log(error);
  }
  pics = data.gallery.data.attributes.Images.data.slice(0, 6);
  if (pics) {
    console.log("pics:", data);
  }
  return (
    <div className="container content-space-1">
      <div className="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
        <h2>Explore Khayal Insider</h2>
      </div>

      <div className="row justify-content-lg-center">
        {pics.map(({ id, attributes }) => {
          return (
            <>
              <div
                key={id}
                className="col-sm-6 col-lg-4 mb-4 mb-sm-0"
                style={{ marginTop: "20px" }}
                onClick={() => setmodalShow(true)}
              >
                <a className="card card-sm card-transition-zoom">
                  <div className="card-transition-zoom-item">
                    <img
                      className="card-img"
                      src={attributes.url}
                      alt="Image Description"
                      style={{
                        width: "353px",
                        height: "292px",
                      }}
                    />
                  </div>
                </a>
              </div>
            </>
          );
        })}
        <GalleryModal
          show={modalShow}
          onHide={() => setmodalShow(false)}
          data={data}
        />
      </div>
    </div>
  );
};

export default Gallery;
