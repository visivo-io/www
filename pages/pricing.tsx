import styled from 'styled-components';
import tw from "tailwind-styled-components"
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function PricingPage() {
  return (
    <Page title="Pricing options to fit any organization.">
      <Wrapper>
        <Description>Free options to get you started, fixed pricing for the established business, and custom pricing for more unique situations.</Description>
        <PricingTablesSection />
        <FaqSection />
      </Wrapper>
    </Page>
  );
}

const Description = tw.p`
  mb-5 font-light text-gray-500 text-3xl dark:text-gray-400
`

const Wrapper = styled.div`
  text-align: center;
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
