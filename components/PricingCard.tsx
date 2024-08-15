import NextLink from 'next/link';
import tw from "tailwind-styled-components"
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
import RichText from './RichText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

interface PricingCardProps {
  title: string;
  price?: string;
  length?: string;
  description?: string;
  benefits: string[];
  isSecondary?: boolean;
}

export default function PricingCard({ title, description, benefits, price, length }: PropsWithChildren<PricingCardProps>) {
  const isAnyBenefitPresent = benefits?.length;

  return (
    <Card>
      <div>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {(price || length) && <PriceContainer>
          {price && <Price>{price}</Price>}
          {length && <Length>{length}</Length>}
        </PriceContainer>}
        {isAnyBenefitPresent && (
          <ul className='mb-6 space-y-2 text-left' >
            {benefits.map((singleBenefit, idx) => (
              <li className='flex items-center space-x-3' key={idx}>
                <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span className='text-2xl flex flex-row'>
                  {singleBenefit.includes("Infinite") && <InfinityIcon icon={faInfinity} />}{singleBenefit.replace("Infinite ", "")}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <NextLink href={"https://app.visivo.io/register"} passHref>
        <Button>
          {'Get Started'}
        </Button>
      </NextLink>
    </Card>
  );
}

const InfinityIcon = styled(FontAwesomeIcon) <{ isSecondary?: boolean }>`
    width: 1.0em;
    height: 1em;
    margin-right: 3px;
    vertical-align: middle !important;
`;

const Card = tw.div`
  flex 
  flex-col 
  p-6 
  mx-auto 
  max-w-lg 
  text-center 
  justify-between
  min-w-card
  text-gray-900 bg-white border-l-2 border-gray-100 xl:p-8">
`

const Title = tw.h3`
  mb-4 text-4xl font-semibold
`;

const Description = tw.p`
  font-light text-gray-500 sm:text-xl
`;

const PriceContainer = tw.div`
  flex justify-center items-baseline my-8
`;

const Price = tw.span`
  mr-2 text-5xl font-extrabold
`;

const Length = tw.span`text-gray-500 text-xl`
