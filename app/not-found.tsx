import { VerticalLine } from '@/components/atoms';
import { MapIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className="mx-auto flex w-full max-w-desktop items-stretch py-xl">
        <VerticalLine hasTopCap hasBottomCap />
        <div className="flex flex-1 flex-col items-center max-lg:px-sm">
          <div className="w-full pb-lg">
            <MapIcon width="48" height="48" />
          </div>
          <h3 className="w-full pb-md max-lg:text-h1-mobile-lg lg:text-h1-desktop-sm">
            404 - Page Not Found ;(
          </h3>
          <p className="w-full text-light-neutral-dark max-lg:pb-md max-lg:text-h5-mobile lg:pb-xl lg:text-h5-desktop">
            Sorry, the page you are looking for does not exist.{' '}
            <Link
              className="text-light-link underline transition-all duration-100 ease-in-out hover:opacity-75"
              href="/"
            >
              Return home
            </Link>
            .
          </p>
        </div>
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
      </section>
    </main>
  );
}
