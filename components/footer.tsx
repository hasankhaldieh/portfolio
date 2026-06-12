import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import { socialLinks } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="page-shell flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
        <p className="text-sm text-slate-500">&copy; Hasan Khaldieh</p>
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="focus-ring rounded-md text-slate-500 transition-colors hover:text-cyan-300"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="focus-ring rounded-md text-slate-500 transition-colors hover:text-cyan-300"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={socialLinks.email}
            aria-label="Email Hasan"
            className="focus-ring rounded-md text-slate-500 transition-colors hover:text-cyan-300"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
