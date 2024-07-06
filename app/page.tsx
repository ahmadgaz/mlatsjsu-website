import Image from 'next/image';

import heroGraphic from '@/assets/hero-graphic.svg';
import VerticalLine from '@/components/vertical-line';
import HorizontalLine from '@/components/horizontal-line';
import discordIcon from '@/assets/discord-icon.svg';
import Button from '@/components/button';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { CalendarDaysIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <main className="">
      <section className="mx-auto flex w-full max-w-desktop items-stretch">
        <VerticalLine hasTopCap />
        <div className="flex flex-1 gap-md max-lg:flex-col max-lg:items-center max-lg:px-sm">
          <div className="flex-1">
            <h1 className="w-full pb-md">
              <span className="w-full max-lg:text-h1-mobile-lg lg:text-h1-desktop-sm">
                Drive <span className="text-light-primary">Innovation</span>
              </span>
              <br />
              <span className="w-full max-lg:text-h1-mobile-sm lg:text-h3-desktop">
                with <span className="text-light-secondary">Data</span>
              </span>
            </h1>
            <p className="w-full pb-md text-light-neutral-dark max-lg:text-h6-mobile lg:text-h6-desktop">
              <em>
                We are a community of machine learning enthusiasts who build
                collaborative projects tackling diverse, interesting problems.
              </em>{' '}
            </p>
            <div className="flex w-full py-sm max-lg:flex-col max-lg:items-center max-lg:gap-sm lg:gap-lg">
              <Button type="primary" color="#5865F2">
                <Image src={discordIcon} alt="discord-icon" />
                Join Our Discord
              </Button>
              <Button type="secondary">Become an Official Member</Button>
            </div>
            <div className="flex w-full py-sm text-light-neutral-dark max-lg:flex-wrap max-lg:justify-center max-lg:gap-md lg:gap-lg">
              <span className="flex items-center gap-sm whitespace-nowrap text-button">
                <MapPinIcon width={20} height={20} />
                BBC 326
              </span>
              <span className="flex items-center gap-sm whitespace-nowrap text-button">
                <CalendarDaysIcon width={20} height={20} />
                Friday @ 11-12:30PM
              </span>
            </div>
          </div>
          <Image src={heroGraphic} alt="hero-graphic" />
        </div>
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
      </section>
      <HorizontalLine hasBottomCap />
    </main>
  );
}
