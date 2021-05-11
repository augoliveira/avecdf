import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="Pt">
        <Head/>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <link href="/vendor/aos/aos.css" rel="stylesheet"/>
  <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
  <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link>
        <body>
          <Main />
          <NextScript />
          <script src="/vendor/aos/aos.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="/vendor/php-email-form/validate.js"></script>
  <script src="/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>

  
  <script src="/js/main.js"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
