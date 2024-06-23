import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked questions</SectionTitle>
      <Accordion title="Your pricing seems simple, do I get anything different on larger plans?">
        Yes, our current pricing scheme is quite simple. It is $5 per user. We are constantly 
        adding features and will eventually have price discrimination for some features. 
        We will maintain the current price structure for existing plans when those changes occur.
      </Accordion>
      <Accordion title="Can I get more seats than is currently listed on the largest plan?">
        Yes, we can add additional users at $5 per month. Just send us an email at info@visivo.io</Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
