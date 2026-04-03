const ProjectEmbedCard = ({ title, href, kind, lightSrc, darkSrc }) => (
  <div className="w-full p-4" style={{ maxWidth: '544px' }}>
    <div className="h-full overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-white transition duration-500 hover:scale-105 hover:border-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-primary-500">
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-primary-500 hover:underline"
          >
            Open
          </a>
        ) : null}
      </div>
      <div className="dark:bg-gray-950 bg-gray-50">
        {kind === 'site' ? (
          <iframe
            src={href}
            title={title}
            loading="lazy"
            className="h-[360px] w-full bg-white dark:bg-gray-900"
          />
        ) : (
          <div className="mx-auto w-full max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightSrc} alt={title} loading="lazy" className="block w-full dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={darkSrc} alt={title} loading="lazy" className="hidden w-full dark:block" />
          </div>
        )}
      </div>
    </div>
  </div>
)

export default ProjectEmbedCard
