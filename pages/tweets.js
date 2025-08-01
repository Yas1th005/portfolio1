import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
// import Tweet from '@/components/Tweet'
// import { getTweets } from '@/lib/twitter'

export default function Tweets({ tweets }) {
  return (
    <>
      <div className="mx-auto max-w-2xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Tweets
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            This is a collection of tweets I've enjoyed. I use Twitter quite a bit, so I wanted a
            place to publicly share what inspires me, makes me laugh, and makes me think.
          </p>
        </div>
        {/* {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))} */}
      </div>
    </>
  )
}
