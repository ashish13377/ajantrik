import { useEffect, useState} from "react";
import Head from 'next/head'
import Slider from "../element/slider";

import Footer from "../layout/footer";
import Header from "../layout/header";
import Preloader from "../element/Preloader";


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
        
      </div>
      <Footer />
      </>
    }
      
    </>
  );
}

export default Index;
