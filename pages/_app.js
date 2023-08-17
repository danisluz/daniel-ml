import '../styles/globals.css'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { useEffect, useState } from "react";

import '../public/static/plugin/bootstrap/css/bootstrap.min.css'
import '../public/static/plugin/font-awesome/css/all.min.css'
import '../public/static/plugin/et-line/style.css'
import '../public/static/plugin/themify-icons/themify-icons.css'
import '../public/static/plugin/owl-carousel/css/owl.carousel.min.css'
import '../public/static/plugin/magnific/magnific-popup.css'
import '../public/static/plugin/scroll/jquery.mCustomScrollbar.min.css'
import '../public/static/css/style.css'

import PreLoader from "../layout/PreLoader";

import fr from '../i18n/fr.json'
import en from '../i18n/en.json'
import pt from '../i18n/pt.json'

const messages = {
  fr,
  en,
  pt
}

function getDirection(_locale){
  return "ltr"
}


export default function App({ Component, pageProps }) {

  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>

      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />

      {load && <PreLoader />}
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}
