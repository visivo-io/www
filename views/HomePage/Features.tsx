import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    image: 'terminal',
    title: 'Powerful CLI',
    description:
      'Simple and easy to use CLI enables fast local development, testability and quick deployments to remote environments. Drives integration with your existing CI process.',
  },
  {
    image: 'list-check',
    title: 'Tons of Options',
    description:
      'Utilize 15+ different types of charts & interactive tables ensuring that you can choose the best visual representation for your data. Customize everything from front to color and much more.',
  },
  {
    image: 'code',
    title: 'Code Based',
    description:
      'Write your visualizations in easy to maintain and modular yaml configurations that sit within your existing analytics transformations or application repository.',
  },
  {
    image: 'sitemap',
    title: 'Integrates with your Existing Architecture',
    description:
      'Setting up a CI, development and production process that mirrors your dbt core configuration is easy with the Visivo CLI and cloud deployments.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 50rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
