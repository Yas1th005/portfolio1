import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src="/static/images/mine.jpeg"
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              placeholder="blur"
              blurDataURL="/static/images/mine.jpeg"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              Panatala Yaswanth
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Full Stack Developer</div>
            {/* <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            <div className="flex flex-col pt-3">
              <a
                className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"
                href="https://www.instagram.com/yaswanth_p_005"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineInstagram className="mr-2 mb-0.5 inline h-5 w-5" />
                Say Hi!
              </a>
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
                animationDelay={300}
                animationDuration={3000}
              >
                I’m passionate about AI, automation, and building scalable web systems. I've
                presented national-level innovations like Pharmora at IInvenTiv 2025, IIT Madras,
                and currently support startups through{' '}
                <Link
                  href={'https://vnest.org'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  V-NEST
                </Link>
                at VIT Chennai. I enjoy combining tech, creativity, and problem-solving to build
                tools that make a real impact.
              </RoughNotation>
            </p>
            <br />
            <p>
              This is what I am doing right{' '}
              <Link
                href={'/about'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                now
              </Link>
            </p>
            <br />
            <p className="sm:block md:hidden lg:hidden">
              I am deeply passionate about using technology to solve real-world problems. I’ve been
              actively working on projects involving
              <span className="font-semibold">
                {' '}
                AI-powered platforms, Full-Stack Development, and Cloud Automation.{' '}
              </span>
              At the same time I am{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                exploring opportunities to collaborate on innovative projects and contribute to
                impactful engineering teams.
              </RoughNotation>
            </p>
            <p className="hidden md:block">
              I am deeply passionate about using technology to solve real-world problems. I’ve been
              actively working on projects involving{' '}
              <RoughNotation
                animationDelay="1000"
                animationDuration="3000"
                type="highlight"
                color="#0ea4e9"
                strokeWidth="3"
                show={true}
              >
                <span className="text-black dark:text-white">
                  AI-powered platforms and Full-Stack Development{' '}
                </span>
              </RoughNotation>
              At the same time I am{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                exploring opportunities to collaborate on innovative projects and contribute to
                impactful engineering teams.
              </RoughNotation>
            </p>
            <br />
            {/* <p>
              I am a strong advocate for open source and I am always interested in working on new
              projects with new people. Feel free to reach out if you have anything to talk about,
              you can reach me through{' '}
              <Link
                href={'mailto:desaiparth2000@gmail.com'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Mail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>{' '}
              or{' '}
              <Link
                href={'https://api.whatsapp.com/send?phone=916358190818&text=hi'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Whatsapp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>
            </p> */}
            <br />
            {/* <p>
              <Link
                href={'/uses'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Here
              </Link>{' '}
              you can see what I use on daily basis
            </p>
            <br />
            <h1>About this site</h1>
            <p>
              Welcome to my home on the internet. This site functions as a blog/portfolio, a place
              to share code and thoughts. Opinions are my own.
            </p>
            <p>
              I learnt how to build this site from the most awesome people in the community:
              <ul>
                <li>
                  <Link
                    href={'https://github.com/timlrx/tailwind-nextjs-starter-blog'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Timothy's Next.js and Tailwind CSS template
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="ml-0.5 inline-block h-4 w-4 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                  : Template starter where I bootstrapped the project.
                </li>
                <li>
                  <Link
                    href={'https://www.einargudni.com/'}
                    className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                  >
                    Einar Guðjónsson
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="ml-0.5 inline-block h-4 w-4 fill-current"
                    >
                      <g data-name="Layer 2">
                        <g data-name="external-link">
                          <rect width="24" height="24" opacity="0" />
                          <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                          <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                  : Now page, navigation style, animations and much more.
                </li>
              </ul>
            </p> */}
          </div>
        </div>
        <div className="mt-10 md:pl-16">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
