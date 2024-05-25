import { InferGetStaticPropsType } from 'next';
import { useEffect } from 'react'
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { getAllPosts } from 'utils/postsFetcher';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import UxFeatures from 'views/HomePage/UxFeatures';
import DevelopFeatures from 'views/HomePage/DevelopFeatures';
import DevOpsFeatures from 'views/HomePage/DevOpsFeatures';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Version Controlled Visualization"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          {/* <Testimonials /> */}
          <UxFeatures />
          <DevelopFeatures />
          <DevOpsFeatures />
          {/* <BasicSection imageUrl="/images/technical.svg" title="Designed for technical teams like yours" overTitle="technical">
            <p>
              Traditional business intelligence tools have become a bottleneck.
              Unlock the latent potential of your engineering and analytics teams.
              Enable them to deliver high-quality, maintainable, dashboards that power data-driven decisions and enable scalable customer-facing data visualization within your application.
            </p>
          </BasicSection>
          
          <BasicSection imageUrl="/images/repeatable.svg" title="A better workflow for repeatable results" overTitle="repeatable" reversed>
            <p>
              We built our workflow with the data at the beginning.  Combined with 100% version-controlled data visualizations, you have
              total control of how your dashboards are built.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/images/invent.svg" title="We didn't reinvent the wheel" overTitle="familiar">
            <p>
              We brought a familiar style of syntax, testing, modularity, scalability, and commands into the data visualization space.
              Starting with simple YAML configurations that live within your existing projects,
              connected a powerful visualization framework with consistent query-building automation to deploy dependable dashboards.
            </p>

          </BasicSection> */}

        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          {/* <Cta /> */}

          {/* <FeaturesGallery /> */}
          <Features />

          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  margin-top: 2em;

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;


export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
