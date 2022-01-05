import { useEffect, useState} from "react";
import Head from 'next/head'
import Slider from "../component/home/slider";
import OurVision from "../component/home/our-vision"
import AboutUsHome from "../component/home/aboutus"
import Footer from "../layout/footer";
import Header from "../layout/header";
import Preloader from "../element/Preloader";
import CounterHome from "../component/home/counterhome";


function Index() {
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },1800)
  },[])
  return (
    <>
     <Head>
        <title>Ajantrik | Technology that makes sense</title>
        
      </Head>
    {
      loading ?
      <Preloader />
      :
      <>
      <Header />
      <div className="page-content bg-white">
        <Slider />
        <OurVision />
        <AboutUsHome />
        <CounterHome />
        
      </div>
      <Footer />
      </>
    }
      
    </>
  );
}

export default Index;
