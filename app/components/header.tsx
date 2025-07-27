import classNames from 'classnames';
import Link from 'next/link';
import { merryWeather, mukta } from '../fonts';

// Replacing the imported SquareArrowLeftIcon with a simple left arrow icon
const SimpleLeftArrowIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

export default function Header({ title }: { title: string }) {
  return (
    <Link
      href="/"
      className={classNames(
        'flex gap-2 items-center text-primary-500 mb-12 outline-0',
        mukta.className,
      )}
    >
      <div className="flex items-center">
        <SimpleLeftArrowIcon size={20} className="h-9 w-9" />
        <span className="font-bold">Home</span>
      </div>
      <div className="mx-1 w-full border-b border-black-500" />
      <span
        className={classNames(
          'text-black dark:text-white text-lg md:text-4xl',
          merryWeather.className,
        )}
      >
        {title}
      </span>
    </Link>
  );
}