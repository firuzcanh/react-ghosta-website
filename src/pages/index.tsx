import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Badges, Features } from "@site/src/widgets";
import Heading from "@theme/Heading";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header
        className={clsx("hero", "text-center overflow-hidden py-8 lg:py-16")}
      >
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="flex items-center justify-center">
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/introduction"
            >
              Get Started
            </Link>
          </div>

          <Badges className="!justify-center mt-8" />
        </div>
      </header>

      <main>
        <Features />
      </main>
    </Layout>
  );
}
