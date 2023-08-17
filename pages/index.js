import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import About from "../components/About";
import Contact from "../components/Contact";
import Expertise from "../components/Expertise";
import TypingAnimation from "../components/TypingAnimation";
import Layout from "../layout/Layout";
import Experience from "../components/Experience";

export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const pdfCurriculum = intl.formatMessage({ id: "page.home.pdf" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });
  const [selectedLocale, setSelectedLocale] = useState("fr");
  const pathSegments = useRouter().locale;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="fr" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" hrefLang="pt" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-T2SQRN47');
              `,
          }}
        />
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T2SQRN47"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <header>
        <div className={styles.translation}>
          {locales.map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div
                className={`${styles.languageButton} ${
                  pathSegments === locale
                    ? styles.selectedLanguage
                    : styles.selectedNotLanguage
                }`}
                onClick={() => setSelectedLocale(locale)}
              >
                <span>{locale.toUpperCase()}</span>
              </div>
            </Link>
          ))}
        </div>
      </header>
      <Layout>
        <section
          id="home"
          data-nav-tooltip="Home"
          className="pp-section pp-scrollable"
        >
          <div className="home-banner">
            <div className="container">
              <div className="row full-screen align-items-center">
                <div className="col-lg-6">
                  <div className="type-box">
                    <h6>
                      <FormattedMessage
                        id="page.home.title"
                        values={{ b: (info) => <b>{info}</b> }}
                      />
                    </h6>
                    <h1 className="font-alt">Daniel Luz</h1>
                    <p className="lead">
                      <FormattedMessage
                        id="page.home.sutitle"
                        values={{ b: (info) => <b>{info}</b> }}
                      />{" "}
                      <TypingAnimation />!
                    </p>
                    <p className="desc">
                      <FormattedMessage
                        id="page.home.text"
                        values={{ b: (info) => <b>{info}</b> }}
                      />
                    </p>
                    <div className="btn-bar">
                      <a
                        className="px-btn px-btn-theme"
                        href={pdfCurriculum}
                        target="_blank"
                      >
                        <FormattedMessage
                          id="page.home.button"
                          values={{ b: (info) => <b>{info}</b> }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hb-img">
                    <img src="static/img/banner-daniel.png" title="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Home */}

        <About />
        <Experience />
        <Expertise />
        <Contact />
      </Layout>
    </>
  );
}
