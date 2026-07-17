import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — CHANAH" },
      {
        name: "description",
        content: "Terms governing use of chanah.dev and CHANAH services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-dvh bg-background px-6 py-32 text-foreground">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
        >
          ← Back to CHANAH
        </Link>
        <h1 className="mt-10 text-5xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Effective 2026
        </p>

        <div className="mt-14 space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Use of the site</h2>
            <p className="mt-3">
              chanah.dev is provided for informational purposes. By using this
              site you agree to use it lawfully and in a manner that does not
              infringe on the rights of others.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Intellectual property
            </h2>
            <p className="mt-3">
              All content, brand marks, and product names — including CHANAH
              and KANE — are the property of CHANAH unless otherwise noted.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              Inquiries regarding these terms can be sent to{" "}
              <a
                href="mailto:contact@chanah.dev"
                className="text-foreground underline underline-offset-4"
              >
                contact@chanah.dev
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
