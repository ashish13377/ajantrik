import Head from 'next/head'
import Link from "next/link";
import HeaderEmpty from "../layout/headerempty"

function Index() {

    return (
        <>
            <Head>
                <title> 404 | Ooops Page Not Found</title>
            </Head>
            <HeaderEmpty />
            {/* <!-- Error Page --> */}
		<div className="section-full" style={{backgroundImage:"url(images/background/bg_19.png)"}}>
			<div className="container">
				<div className="error-page text-center">
					<div className="dlab_error">404</div>
					<h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
					<Link href="/"><a className="btn btn-primary radius-no"><span className="p-lr15">Back to Homepage</span></a></Link>
				</div>
			</div>
		</div>
		{/* <!-- Error Page End --> */}
            
            

        </>
    );
}

export default Index;
