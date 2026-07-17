import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CHANAH" },
      {
        name: "description",
        content:
          "How CHANAH handles information collected through chanah.dev and our services.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Effective 2026
        </p>

        <div className="mt-14 space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Overview</h2>
            <p className="mt-3">
              CHANAH ("we", "us") respects your privacy. This policy describes
              what information we collect through chanah.dev, why we collect
              it, and how it is handled.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Information we collect
            </h2>
            <p className="mt-3">
              We collect only what is necessary: messages you send us via
              email, and basic anonymous analytics used to understand how the
              site is used. We do not sell personal information.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
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
