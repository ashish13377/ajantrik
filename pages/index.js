import { useEffect, useState } from "react";
import Footer from "../src/layout/footer";
import Header from "../src/layout/header";
import Perloder from "../src/component/Preloader";

function Index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ?
         <Perloder />
          :
          <div>

            <Header />
            <div className="page-content bg-white">
              <h1 style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adip, Lorem Loremargin
              </h1>
              <h1 style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adip, Lorem Loremargin
              </h1>
              <h1 style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adip, Lorem Loremargin
              </h1>
              <h1 style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adip, Lorem Loremargin
              </h1>
              <h1 style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adip, Lorem Loremargin
              </h1>
              <h1 style={{ textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adip, Lorem Loremargin
              </h1>
            </div>
            <Footer />
          </div>

      }


    </>

  );
}

export default Index;
