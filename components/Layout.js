import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Khayal Facilities and Management",
  description:
    "Khayal Facilities Management (KFM) is a modern services providers in facilities, and human resource management company that is driven by its commitment to excellence. Lead by a team of experienced, and qualified staff, KFM strives to provide services that are at par with international standards. We provide services and guidance that every business needs to wipe out inefficiency by creating an environment friendly and productive facility through integrating people, places, and process. ",
  keywords: "management,services,careers",
};
export default Layout;
