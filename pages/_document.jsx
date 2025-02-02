import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/image-removebg-preview (4).png" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="How about moderating your own server with Astra bot? Create your own free world and create your own playlist, experience this pleasure with the best sounds."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="MYRoleplay" />
          <meta name="twitter:creator" content="MYRoleplay" />
          <meta property="og:url" content="https://astrabot.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="MYRoleplay" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="How about moderating your own server with Astra bot? Create your own free world and create your own playlist, experience this pleasure with the best sounds."
          />
          <meta property="og:image" content="/img/image-removebg-preview (4).png" />
          <meta property="og:image:alt" content="MYRoleplay" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="MYRoleplay"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="/img/image-removebg-preview (4).png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
