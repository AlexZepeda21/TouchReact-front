import { useI18n } from "../lib/I18nProvider";
import { Cloud } from "lucide-react";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/50 bg-muted/30 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Cloud className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-base font-bold text-foreground">
                Touch <span className="text-primary">Tech</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.desc}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {t.footer.services}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                t.services.iaas.title,
                t.services.paas.title,
                t.services.saas.title,
                t.services.security.title,
                t.services.migration.title,
                t.services.consulting.title,
              ].map((s) => (
                <li key={s || Math.random()}>
                  <a href="#servicios" className="text-sm text-muted-foreground transition-colors hover:text-foreground" >
                    {s || "Traducción pendiente"}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {t.footer.company}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                { label: t.footer.aboutLink, href: "#nosotros" },
                { label: t.footer.careersLink, href: "#" },
                { label: t.footer.blogLink, href: "#" },
                { label: t.footer.partnersLink, href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {t.footer.legal}
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                t.footer.privacyLink,
                t.footer.termsLink,
                t.footer.cookiesLink,
              ].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/50 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Touch Technologies.{" "}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
