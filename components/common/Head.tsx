import { NextPage } from 'next';

import Head from "next/head";

const HeadMeta: NextPage = () => {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
            <meta name="apple-mobile-web-app-title" content="CARTDROP" />
            <meta name="application-name" content="CARTDROP" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
    )
}

export default HeadMeta