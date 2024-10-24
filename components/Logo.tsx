import NextImage from 'next/image';

export default function Logo({ ...rest }) {
  return (
    <NextImage src={"/images/logo.webp"} width={40} height={40} alt={"logo"} />
  );
}
