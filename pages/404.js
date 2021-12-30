import Head from 'next/head'
import HeaderEmpty from "../layout/headerempty"

function Index() {

    return (
        <>
            <Head>
                <title> 404 | Ooops Page Not Found</title>
            </Head>
            <HeaderEmpty />
            <main>
                <div>
                    <div>
                        <div>
                            <span>404&nbsp;error</span>
                            <span>page&nbsp;not&nbsp;found</span>
                        </div>
                        <svg viewBox="0 0 200 600">
                            <polygon points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 200 591.044514 200 8" />
                        </svg>
                    </div>
                    <svg className="crack" viewBox="0 0 200 600">
                        <polyline points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514" />
                    </svg>
                    <div>
                        <svg viewBox="0 0 200 600">
                            <polygon points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 0 591.044514 0 8" />
                        </svg>
                        <div>
                            <span>sorry&nbsp;about&nbsp;that!</span>
                            <span>
                                <a>
                                    <b>return&nbsp;home?</b>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Index;
