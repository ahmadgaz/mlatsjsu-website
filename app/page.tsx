import Image from 'next/image';
import heroGraphic from '@/assets/hero-graphic.svg';
import missionGraphicOneDs from '@/assets/mission-graphic-1-ds.svg';
import missionGraphicOneMb from '@/assets/mission-graphic-1-mb.svg';
import missionGraphicTwo from '@/assets/mission-graphic-2.svg';
import missionGraphicThree from '@/assets/mission-graphic-3.svg';
import missionGraphicFour from '@/assets/mission-graphic-4.svg';
import pumpkinPatchOne from '@/assets/pumpkin-patch-1-mb.png';
import pumpkinPatchTwo from '@/assets/pumpkin-patch-2-mb.png';
import pumpkinPatchThree from '@/assets/pumpkin-patch-3-mb.png';
import intelMuseumOne from '@/assets/intel-museum-1-mb.png';
import intelMuseumTwo from '@/assets/intel-museum-2-mb.png';
import intelMuseumThree from '@/assets/intel-museum-3-mb.png';
import VerticalLine from '@/components/vertical-line';
import HorizontalLine from '@/components/horizontal-line';
import discordIcon from '@/assets/discord-icon.svg';
import instagramIcon from '@/assets/instagram-icon.svg';
import youtubeIcon from '@/assets/youtube-icon.svg';
import linkedInIcon from '@/assets/linkedin-icon.svg';
import Button from '@/components/button';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { CalendarDaysIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <main>
      {/* Mobile Nav Spacer */}
      <div className="h-[80px] lg:hidden" />

      {/* Hero */}
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

      {/* Mission */}
      <section className="mx-auto flex w-full max-w-desktop flex-col items-center px-xl">
        <h3 className="w-full pb-md text-center max-lg:text-h1-mobile-lg lg:text-h1-desktop-sm">
          Our Mission
        </h3>
        <p className="w-full text-center text-light-neutral-dark max-lg:pb-xl max-lg:text-h5-mobile lg:pb-xxl lg:text-h5-desktop">
          Create an <span className="text-light-primary">open</span> and{' '}
          <span className="text-light-secondary">supportive</span> community for
          machine learning.
        </p>
        <Image
          className="max-lg:hidden"
          src={missionGraphicOneDs}
          alt="mission-graphic-1-ds"
        />
        <Image
          className="lg:hidden"
          src={missionGraphicOneMb}
          alt="mission-graphic-1-mb"
        />
      </section>
      <HorizontalLine hasTopCap />
      <section className="mx-auto flex w-full max-w-desktop items-stretch">
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
        <div className="flex flex-1 items-center max-lg:flex-col-reverse max-lg:gap-xl max-lg:px-sm lg:gap-xxl lg:py-xxl">
          <Image src={missionGraphicTwo} alt="mission-graphic-2" />
          <p className="w-full text-light-neutral-dark max-lg:text-center max-lg:text-h5-mobile lg:text-right lg:text-h5-desktop">
            Prepare students with{' '}
            <span className="text-light-primary">practical</span> machine
            learning skills.
          </p>
        </div>
        <VerticalLine />
      </section>
      <HorizontalLine isReflected />
      <section className="mx-auto flex w-full max-w-desktop items-stretch">
        <VerticalLine />
        <div className="flex flex-1 items-center max-lg:flex-col max-lg:gap-xl max-lg:px-sm lg:gap-xxl">
          <p className="w-full text-light-neutral-dark max-lg:text-center max-lg:text-h5-mobile lg:text-left lg:text-h5-desktop">
            <span className="text-light-primary">Promote diversity</span> in the
            field to{' '}
            <span className="text-light-secondary">solve problems</span>{' '}
            relevant to our community.
          </p>
          <Image src={missionGraphicThree} alt="mission-graphic-3" />
        </div>
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
      </section>
      <HorizontalLine />
      <section className="mx-auto flex w-full max-w-desktop items-stretch">
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
        <div className="flex flex-1 flex-col items-center max-lg:gap-xl max-lg:px-sm lg:gap-xxl lg:py-xxl">
          <p className="w-full text-center text-light-neutral-dark max-lg:text-h5-mobile lg:text-h5-desktop">
            Create an <span className="text-light-primary">open</span> and{' '}
            <span className="text-light-secondary">supportive</span> community
            for machine learning.
          </p>
          <Image src={missionGraphicFour} alt="mission-graphic-4" />
        </div>
        <VerticalLine hasBottomCap />
      </section>

      {/* Spotlights */}
      <section className="mx-auto flex w-full max-w-desktop items-stretch py-xl">
        <VerticalLine hasTopCap hasBottomCap />
        <div className="flex flex-1 flex-col items-center max-lg:px-sm">
          <h3 className="w-full pb-md max-lg:text-h1-mobile-lg lg:text-h1-desktop-sm">
            Spotlights
          </h3>
          <p className="w-full text-light-neutral-dark max-lg:pb-md max-lg:text-h5-mobile lg:pb-xl lg:text-h5-desktop">
            Checkout these spotlights of our events.
          </p>
          <div className="flex w-full flex-col gap-md">
            <div className="flex w-full gap-md max-lg:flex-col max-lg:items-stretch">
              <div className="flex h-[500px] flex-col items-center justify-center rounded-md border-line-width border-dashed border-light-neutral-gray bg-light-neutral-white p-xl lg:w-[300px]">
                <h3 className="w-full text-center text-light-neutral-dark max-lg:text-h3-mobile lg:text-h3-desktop">
                  Pumpkin Patch Social
                </h3>
              </div>
              <Image
                className="min-h-0 min-w-0 flex-1 rounded-md border-line-width border-dashed border-light-neutral-gray object-cover"
                src={pumpkinPatchOne}
                alt="pumpkin-patch-1"
              />
            </div>
            <div className="flex w-full gap-md max-lg:flex-col max-lg:items-stretch">
              <Image
                className="min-h-0 min-w-0 flex-1 rounded-md border-line-width border-dashed border-light-neutral-gray object-cover"
                src={pumpkinPatchTwo}
                alt="pumpkin-patch-2"
              />
              <Image
                className="h-[500px] min-h-0 min-w-0 rounded-md border-line-width border-dashed border-light-neutral-gray object-cover lg:w-[300px]"
                src={pumpkinPatchThree}
                alt="pumpkin-patch-3"
              />
            </div>
            <div className="flex w-full gap-md max-lg:flex-col max-lg:items-stretch">
              <div className="flex h-[500px] flex-col items-center justify-center rounded-md border-line-width border-dashed border-light-neutral-gray bg-light-neutral-white p-xl lg:w-[300px]">
                <h3 className="w-full text-center text-light-neutral-dark max-lg:text-h3-mobile lg:text-h3-desktop">
                  Intel Museum
                </h3>
              </div>
              <Image
                className="min-h-0 min-w-0 flex-1 rounded-md border-line-width border-dashed border-light-neutral-gray object-cover"
                src={intelMuseumOne}
                alt="intel-museum-1"
              />
            </div>
            <div className="flex w-full gap-md max-lg:flex-col max-lg:items-stretch">
              <Image
                className="min-h-0 min-w-0 flex-1 rounded-md border-line-width border-dashed border-light-neutral-gray object-cover"
                src={intelMuseumTwo}
                alt="intel-museum-2"
              />
              <Image
                className="h-[500px] min-h-0 min-w-0 rounded-md border-line-width border-dashed border-light-neutral-gray object-cover lg:w-[400px]"
                src={intelMuseumThree}
                alt="intel-museum-3"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
      </section>

      {/* Stay Updated */}
      <section className="mx-auto flex w-full max-w-desktop items-stretch py-xl">
        <VerticalLine hasTopCap hasBottomCap />
        <div className="flex flex-1 flex-col items-center max-lg:px-sm">
          <h3 className="w-full pb-md max-lg:text-h1-mobile-lg lg:text-h1-desktop-sm">
            Stay Updated
          </h3>
          <p className="w-full pb-md text-light-neutral-dark max-lg:text-h5-mobile lg:text-h5-desktop">
            Follow our socials to be informed when new events or projects are
            announced.
          </p>
          <div className="flex w-full gap-lg py-sm max-lg:flex-col">
            <Button type="primary" color="#5865F2">
              <Image src={discordIcon} alt="discord-icon" />
              Discord
            </Button>
            <Button type="primary" color="#C13584">
              <Image src={instagramIcon} alt="instagram-icon" />
              Instagram
            </Button>
            <Button type="primary" color="#F61C0D">
              <Image src={youtubeIcon} alt="youtube-icon" />
              YouTube
            </Button>

            <Button type="primary" color="#0E76AB">
              <Image src={linkedInIcon} alt="linkedin-icon" />
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
      </section>
    </main>
  );
}
