import classNames from 'classnames';
import Link from 'next/link';
import { BackgroundGradientAnimation } from './components/background-gradient-animation';
// import { AtSignIcon } from './components/layouts/icons/at-sign-icon';
import { GithubIcon } from './components/layouts/icons/github-icon';
import { LinkedinIcon } from './components/layouts/icons/linkedin-icon';
import ThemeSwitch from './components/layouts/theme-switch/theme-switch';
import { merryWeather } from './fonts';
import { InstagramIcon } from './components/layouts/icons/instagram-icon';

export default function Home() {
  return (
    <main className="relative min-h-svh w-screen overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <ThemeSwitch />
      </div>
      <BackgroundGradientAnimation>
        <div
          className={classNames('relative min-h-svh', merryWeather.className)}
        >
          <div className="absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 text-shadow-lg lg:ml-14">
            <h1 className="font-serif text-2xl font-medium md:mr-4 md:text-4xl">
              welcome to my{' '}
              <span className="font-bold">personal website — </span> or, as i
              like to call it, my{' '}
              <span className="italic border-b">organized</span> chaos on the
              web.
            </h1>
            <section className="relative z-10">
              <p className="text-base text-justify">
                {/* i&apos;m akshat majila — an ai engineer and forever a student of
                the craft. i spend my days building ai systems that are smarter
                than me and my nights wondering if that&apos;s a good idea. what
                drives me beyond the technical challenges is my entrepreneurial
                spirit; the conviction that technology should be a bridge to a
                better world, not just a showcase of what&apos;s possible. right
                now, i&apos;m building cool stuff at{' '} */}

                i&apos;m panatala yaswanth — a computer science undergrad and an engineer driven by curiosity and purpose. i spend my days architecting scalable systems and my nights tinkering with ideas that blend ai with human-centered design. what excites me most isn&apos;t just solving technical puzzles — it&apos;s building tools that empower others. right now, i&apos;m creating impact through projects like pharmora and leading innovation at vit&apos;s startup incubator {` `}
                <a
                  href="https://vnest.org"
                  className="underline-magical"
                  target="_blank"
                  rel="noreferrer"
                >
                   VNEST
                </a>
                .
              </p>
            </section>
            <section className="relative z-10 flex space-x-4 items-center text-sm">
              <div>
                <p>more about me: </p>
                <div className="flex -ml-2">
                  <Link
                    href="https://www.linkedin.com/in/panatala-yaswanth-9621aa293/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                  >
                    <LinkedinIcon className="h-9 w-9" />
                  </Link>
                  <Link
                    href="https://github.com/Yas1th005"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="github"
                  >
                    <GithubIcon className="h-9 w-9" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/yaswanth_p_005"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="h-9 w-9" />
                  </Link>
                  {/* <Link
                    href="mailto:akshatsinghmajila@gmail.com"
                    target="_blank"
                    aria-label="email"
                    rel="noreferrer"
                  >
                    <AtSignIcon className="h-9 w-9" />
                  </Link> */}
                </div>
              </div>
              <div className="h-14 border-l border-gray-300" />
              <div className="flex flex-wrap space-x-3 space-y-1">
                <Link href="/projects">/projects</Link>
                <Link href="/thoughts">/thoughts</Link>
                <Link href="/reads">/reads</Link>
              </div>
            </section>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}
