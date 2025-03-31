import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-start p-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Better design for your digital products.</h1>
        <p className="mb-6 text-justify">
          We are a digital agency that specializes in creating beautiful and functional websites,
          applications, and digital experiences.
        </p>
        <button className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-700">
          Get Started
        </button>
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.png" fill alt="hero" className="object-contain" />
      </div>
    </div>
  );
}
