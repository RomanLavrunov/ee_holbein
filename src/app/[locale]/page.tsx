'use client'
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainImage from '../../../public/images/en-top_slide-pallet.jpg'
import Image from "next/image";
import './HomePage.css';

export default function Home(){

  return (
    <div className="home-page-container">
      <Header />
      <div className="image-container"><Image src={MainImage} alt="main-image" /></div>
      <Footer />
    </div>
  )
}
