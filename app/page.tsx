import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from 'next/link';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 max-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-right text-gray-900 sm:text-6xl">
          Your MarketPlace For High Quality {' '} 
          <span className="text-red-600">Digital Assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to practice_store. Every Assest on our
          platform is verified by our team to ensure our
          highest quality standards. 
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="./products" className="">Browse Trending</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
