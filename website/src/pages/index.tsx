import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import Feature from "../components/Feature";
import Features from "../components/Features";
import Hero from "../components/Hero";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { tagline } = {} } = context;

  const regExpUrl =
    "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp";

  return (
    <Layout description={tagline}>
      <Hero />

      <main>
        <Features>
          <Feature title="Tailored for purpose">
            A place for <a href={regExpUrl}>RegExp</a> utilities shared by{" "}
            <strong>Snout</strong> libraries, that allows for tight control over
            implementation details.
          </Feature>

          <Feature title="Teeny tiny">
            From day one, all <strong>Snout</strong> libraries have been written
            with a focus on minimizing bundle size impact.
          </Feature>

          <Feature title="No baggage">
            <strong>Snout</strong> libraries don&apos;t attempt to directly
            support legacy browsers, which keeps things maintainable.
          </Feature>
        </Features>
      </main>
    </Layout>
  );
}
