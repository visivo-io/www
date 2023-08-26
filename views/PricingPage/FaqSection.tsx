import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked questions</SectionTitle>
      <Accordion title="Your pricing seems simple, do I get anything different on larger plans?">
        Yes our current pricing scheme is quite simple.  It is $5 per user.  We are constantly adding features adding
        will eventually have price discrimination for some features.  However, when we do introduce those
        discrimination it will only be done for new or changing plans.  This is to reward early adopters with a lower price if the number of seats is sufficient for you.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
