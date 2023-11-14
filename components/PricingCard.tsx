import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
import RichText from './RichText';

interface PricingCardProps {
  title: string;
  description: string;
  benefits: string[];
  isOutlined?: boolean;
  isSecondary?: boolean;
}

export default function PricingCard({ title, description, benefits, isOutlined, isSecondary, children }: PropsWithChildren<PricingCardProps>) {
  const isAnyBenefitPresent = benefits?.length;

  return (
    <Wrapper isOutlined={isOutlined} isSecondary={isSecondary}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PriceContainer>
        <Price>{children}</Price>
        {isAnyBenefitPresent && (
          <CustomRichText>
            <ul>
              {benefits.map((singleBenefit, idx) => (
                <li key={idx}>{singleBenefit}</li>
              ))}
            </ul>
          </CustomRichText>
        )}
      </PriceContainer>
      <NextLink href={isSecondary ? "https://docs.visivo.io" : "https://app.visivo.io/accounts/register/"} passHref>
        <Button>
          {isSecondary ? 'Install' : 'Get Started'}
        </Button>
      </NextLink>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOutlined?: boolean, isSecondary?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  ${(p) => (p.isOutlined ? 'color: white;' : '')}
  background: ${(p) => (p.isOutlined ? 'rgb(var(--cardOutlinedBackground))' : p.isSecondary ? 'rgb(var(--cardSecondaryBackground))' : 'rgb(var(--cardBackground))')};
  box-shadow: ${(p) => (p.isOutlined ? 'var(--shadow-lg)' : p.isSecondary ? 'none' : 'var(--shadow-lg)')};
  transform: ${(p) => (p.isOutlined ? 'scale(1.1)' : 'scale(1.0)')};
  text-align: center;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=desktop')} {
    box-shadow: var(--shadow-md);
    transform: none;
    order: ${(p) => (p.isOutlined ? -1 : 0)};
  }
`;

const Title = styled.h3`
  font-size: 4rem;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-size: 2.5rem;
`;

const PriceContainer = styled.div`
  margin: auto;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 4rem;
  line-height: 1;
  font-weight: bold;

  span {
    font-size: 2rem;
    font-weight: normal;
  }
`;

const CustomRichText = styled(RichText)`
  li {
    margin: auto;
    width: fit-content;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
`;
