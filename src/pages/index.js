import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing3/Hero";
import Works from "../sections/landing3/Works";
import Contact from "../sections/landing3/Contact";

const IndexPage = () => {
  return (
    <>
      {/* GOOGLE TAGS FOR ANALYTICS */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XVSHXZ255H"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-XVSHXZ255H');`}
      </script>

      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
