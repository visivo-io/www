import { InferGetStaticPropsType } from 'next';
import { useEffect } from 'react'
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import GifToVideo from 'components/GifToVideo';
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
          <GifToVideo />
          {/* <Partners /> */}
          {/* <Testimonials />  */}
          <UxFeatures />
          <DevelopFeatures />
          <DevOpsFeatures />
          

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
    margin-bottom: 10rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  margin-top: 2em;

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 5rem;
  }

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;


export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
