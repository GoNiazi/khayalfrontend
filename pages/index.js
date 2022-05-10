import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Challenges from "../components/Challenges";
import CustomerSatisfaction from "../components/CustomerSatisfaction";
import Services from "../components/Services";
import OtherServices from "../components/OtherServices";
import Reviews from "../components/Reviews";
import TrustedClients from "../components/TrustedClients";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <Layout>
      <main id="content" role="main">
        <HeroSection />
        <Challenges />
        <CustomerSatisfaction />
        <Services />
        <OtherServices />
        <Reviews />
        <TrustedClients />
        <Gallery />
      </main>
    </Layout>
  );
}
