import Image from 'next/image';
import VerticalLine from '@/components/vertical-line';
import LinkButton from '@/components/link-button';
import Link from 'next/link';
import about from '@/assets/about.png';
import discordIcon from '@/assets/discord-icon.svg';
import linkedinButton from '@/assets/linkedin-button.svg';
import auniBagchi from '@/assets/auni-bagchi.png';
import danielUng from '@/assets/daniel-ung.png';
import rahulRaju from '@/assets/rahul-raju.png';
import milindPathak from '@/assets/milind-pathak.png';
import rahulKandekar from '@/assets/rahul-kandekar.png';
import haydonBehl from '@/assets/haydon-behl.png';
import triqueNguyen from '@/assets/trique-nguyen.png';

export default function About() {
  return (
    <main>
      {/* Purpose */}
      <section className="mx-auto flex w-full max-w-desktop items-stretch py-xl">
        <VerticalLine hasTopCap hasBottomCap />
        <div className="flex flex-1 flex-col items-center max-lg:px-sm">
          <h3 className="w-full pb-md max-lg:text-h1-mobile-lg lg:text-h1-desktop-sm">
            Purpose
          </h3>
          <p className="w-full pb-lg text-p">
            ML@SJSU aims to bring together a community of dedicated individuals
            to inspire collaboration and exploration in the field of machine
            learning. Many machine learning courses focus heavily on theory and
            place less emphasis on practical application. This organization
            provides interested participants with an environment to pursue
            knowledge of how to implement what they have learned. We aspire to
            help newcomers over this initial learning curve, conduct
            extracurricular group projects, and cover breakthrough advances in
            machine learning.
          </p>

          <Image
            className="h-full w-full rounded-md border-line-width border-dashed border-light-neutral-dark bg-light-neutral-gray object-cover align-bottom"
            src={about}
            alt="about"
          />
        </div>
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
      </section>

      {/* Get Involved */}
      <section className="mx-auto flex w-full max-w-desktop items-stretch py-xl">
        <VerticalLine hasTopCap hasBottomCap />
        <div className="flex flex-1 flex-col items-center max-lg:px-sm">
          <h3 className="w-full pb-md max-lg:text-h1-mobile-lg lg:text-h1-desktop-sm">
            Get Involved
          </h3>
          <p className="w-full pb-lg text-p">
            Anyone is welcome to join our club meetings, which will include{' '}
            <span className="text-light-primary">project updates</span>,{' '}
            <span className="text-light-primary">workshops</span>,{' '}
            <span className="text-light-primary">guest presentations</span>,
            &amp;{' '}
            <span className="text-light-primary">research paper readings</span>.
            However, only those in the project team will be able to work on the
            ongoing&#47;new team projects that the club plans.
          </p>
          <b className="w-full">
            Any one of these conditions would satisfy the requirements to
            joining the project team:
          </b>
          <ol className="w-full list-inside list-decimal pb-lg text-p" type="1">
            <li>Be a full member of ML@SJSU for one semester</li>
            <li>
              Have completed a machine learning course (transcript required) or
              equivalent experience (projects or GitHub)
            </li>
            <li>Turn in a trial project</li>
          </ol>
          <p className="w-full pb-lg text-p">
            <em>
              The trial project does not require prior coding or ML experience.
            </em>{' '}
            In order to complete the trial project, please join our discord
            server and read the pinned message in the{' '}
            <Link
              className="text-light-link underline transition-all duration-100 ease-in-out hover:opacity-75"
              href="/"
            >
              #for-new-members
            </Link>{' '}
            channel.
          </p>
          <div className="flex w-full gap-lg py-sm max-lg:flex-col">
            <LinkButton href="/" type="primary" color="#5865F2">
              <Image src={discordIcon} alt="discord-icon" />
              Join Our Discord
            </LinkButton>
          </div>
        </div>
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
      </section>

      {/* Meet the Board */}
      <section className="mx-auto flex w-full max-w-desktop items-stretch py-xl">
        <VerticalLine hasTopCap hasBottomCap />
        <div className="flex flex-1 flex-col items-center max-lg:px-sm">
          <h3 className="w-full pb-md max-lg:text-h1-mobile-lg lg:text-h1-desktop-sm">
            Meet the Board
          </h3>
          <ul className="flex w-full flex-wrap justify-center gap-md">
            {[
              {
                src: auniBagchi,
                alt: 'auni-bagchi',
                name: 'Auni Bagchi',
                role: 'President',
                linkedin: '/',
              },
              {
                src: danielUng,
                alt: 'daniel-ung',
                name: 'Daniel Ung',
                role: 'Public Relations',
                linkedin: '/',
              },
              {
                src: rahulRaju,
                alt: 'rahul-raju',
                name: 'Rahul Raju',
                role: 'Public Relations',
                linkedin: '/',
              },
              {
                src: milindPathak,
                alt: 'milind-pathak',
                name: 'Milind Pathak',
                role: 'Event Coordinator',
                linkedin: '/',
              },
              {
                src: rahulKandekar,
                alt: 'rahul-kandekar',
                name: 'Rahul Kandekar',
                role: 'Academic Committee',
                linkedin: '/',
              },
              {
                src: haydonBehl,
                alt: 'haydon-behl',
                name: 'Haydon Behl',
                role: 'Academic Committee',
                linkedin: '/',
              },
              {
                src: triqueNguyen,
                alt: 'trique-nguyen',
                name: 'Trique Nguyen',
                role: 'Webmaster',
                linkedin: '/',
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex h-[122px] min-w-fit flex-1 gap-sm rounded-md border-line-width border-dashed border-light-neutral-dark bg-light-neutral-white p-md"
              >
                <Image
                  className="aspect-square h-full w-min rounded-sm bg-light-neutral-gray object-cover align-bottom"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="flex flex-1 justify-between gap-md p-sm">
                  <div className="flex-1">
                    <p className="text-p font-bold text-light-neutral-dark">
                      {item.name}
                    </p>
                    <p className="text-p italic text-light-primary">
                      {item.role}
                    </p>
                  </div>
                  {item.linkedin ? (
                    <Link
                      className="transition-all duration-100 ease-in-out hover:opacity-75"
                      href={item.linkedin}
                    >
                      <Image src={linkedinButton} alt="linkedin-button" />
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-lg:min-w-line-mobile lg:min-w-line-desktop" />
      </section>
    </main>
  );
}
