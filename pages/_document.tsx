import Document, { Html, Head, Main, NextScript } from "next/document";
import {} from "next";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css"
                        integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB"
                        crossOrigin="anonymous"
                        key="fontawesome"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;