import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.8,
  stroke: "currentColor",
  "aria-hidden": true,
} as const;

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.97 10.97 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M5.34 3.2a2.14 2.14 0 1 1 0 4.28 2.14 2.14 0 0 1 0-4.28ZM3.5 8.9h3.68V20.5H3.5V8.9Zm5.9 0h3.53v1.59h.05c.49-.93 1.69-1.91 3.48-1.91 3.72 0 4.41 2.45 4.41 5.63v6.29h-3.68v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.4V8.9Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5v10.5H3.75V6.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7.5 7.5 5.25 7.5-5.25" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.6 3.75H4.5c-.42 0-.75.34-.75.75 0 8.7 7.05 15.75 15.75 15.75.41 0 .75-.33.75-.75v-2.1l-4.05-1.35-1.05 2.1a13.6 13.6 0 0 1-9.3-9.3l2.1-1.05L6.6 3.75Z"
      />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 8.25-3.75 3.75 3.75 3.75M15.75 8.25l3.75 3.75-3.75 3.75M13.5 5.25l-3 13.5" />
    </svg>
  );
}
