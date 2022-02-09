
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 


function PressConference() {
  const gallery = [
    {
      category: ["all",],
      img: (
        <Image
          src="/images/projects/1.png"
          layout="responsive"
          width={320}
            height={320}
        />
      ),
    },
    {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/2.png"
            layout="responsive"
            width={320}
            height={320}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/3.png"
            layout="responsive"
            width={320}
            height={320}
          />
        ),
      },
      {
        category: ["all",],
        img: (
          <Image
            src="/images/projects/4.png"
            layout="responsive"
            width={320}
            height={320}
          />
        ),
      },
    
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(gallery);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = gallery.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
    
      <section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg17.png)","backgroundSize":"cover","backgroundPosition":"top center","backgroundRepeat":"no-repeat", }} style={{ paddingTop: "30px !important" }}>
			<div className="container">
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">PRESS RELEASE</h6> 
					<h2 className="title">Take A Look At Our Press Release</h2>
				</div>
        <SimpleReactLightbox>
            <SRLWrapper >
              <div className="clearfix">
                <ul id="masonry" className="row" data-column-width="2">
                  {projects.map((item) =>
                    item.filtered === true ? (
                      <>
                        <li
                          className="card-container col-lg-4 col-md-4 col-sm-4 web_design wow fadeInUp"
                          data-wow-duration="2s"
                          data-wow-delay="0.1s"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="dlab-box  style-2 m-b30">
                            <div className="dlab-media ">
                              {item.img}
                            </div>
                          </div>
                        </li>
                      </>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </div>
            </SRLWrapper >      
          </SimpleReactLightbox> 
          </div>
		</section>
          
    </>
  );
}

export default PressConference;
