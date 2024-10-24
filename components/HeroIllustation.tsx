import NextImage from 'next/image';

export default function HeroIllustration() {
  return (
    <NextImage priority src={"/images/graph.webp"} width={600} height={400} alt={"graph"} />
  )
}
