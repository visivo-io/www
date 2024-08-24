import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked questions</SectionTitle>
      <Accordion title="Can I get more seats on a given plan? *">
        Yes, additional seats are available on our paid plans for $15/month.
      </Accordion>
      <Accordion title="What do I do if I am more than a Solo and Less than a Team?">
        We can work with you on custom pricing if you are in a growing organization and need fewer than 10 seats.  Contact us at sales@visivo.io.
      </Accordion>
      <Accordion title="How do I use the Open Source tool?">
        The open source CLI is used for local development with every plan.  It can also be used on its own to create dashboards you wish to host internally. Checkout our documentation for more information.
      </Accordion>
      <Accordion title="I want to use the Open Source tool to deploy internally, but would like support.  What do you offer?">
        We can provide a support contract to ensure your success.  Reach out to sales@visivo.io!
      </Accordion>
      <Accordion title="Do you offer a yearly discount?">
        Yes! We give a 20% discount for yearly plans.
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
