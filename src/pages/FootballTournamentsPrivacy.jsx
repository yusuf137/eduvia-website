const sections = [
  {
    title: "Data Collection",
    body: [
      "Football Tournaments Maker does not require users to create an account and does not collect personal information such as name, email address, phone number, location, contacts, photos, or payment information.",
      "Tournament data created inside the app is used only for the app's tournament management features.",
    ],
  },
  {
    title: "Local Data",
    body: [
      "The app may store tournament information locally on the user's device in order to keep tournaments, teams, match results, and standings available during use.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Football Tournaments Maker does not use third-party advertising services and does not sell user data.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "The app is suitable for general use and does not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "Football Tournaments Maker does not share personal data with third parties.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "This privacy policy may be updated from time to time. Any changes will be posted on this page.",
    ],
  },
];

export default function FootballTournamentsPrivacy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="/" className="flex items-center py-0.5">
            <img
              src="/eduvia-logo.png"
              alt="Eduvia"
              className="h-9 w-auto max-w-[140px] object-contain md:h-10"
            />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:p-10">
          <h1 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl">
            Football Tournaments Maker Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: May 2026</p>

          <p className="mt-6 leading-relaxed text-gray-600">
            Football Tournaments Maker is a simple tournament management app that helps users create
            and manage football tournaments, teams, fixtures, scores, and standings.
          </p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-dark">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section>
              <h2 className="text-lg font-semibold text-dark">Contact</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                For questions about this privacy policy, you can contact us at:{" "}
                <a
                  href="mailto:info@eduviaapp.com"
                  className="font-medium text-primary hover:text-accent"
                >
                  info@eduviaapp.com
                </a>
              </p>
            </section>
          </div>
        </article>

        <p className="mt-8 text-center">
          <a
            href="/"
            className="text-sm font-semibold text-primary transition hover:text-accent"
          >
            ← Back to Eduvia
          </a>
        </p>
      </main>
    </div>
  );
}
