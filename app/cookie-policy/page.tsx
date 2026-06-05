export default function CookiePolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-500">
          Last updated: 5 June 2026
        </p>
      </div>

      {/* Intro */}
      <p className="mb-6 leading-relaxed">
        ERS (Errand Runners System) uses cookies and similar technologies
        to enhance your experience, analyze usage, and improve our services.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          1. What Are Cookies?
        </h2>
        <p>
          Cookies are small text files stored on your device when you visit a website.
          They help us recognize your device and store certain information about your
          preferences or past actions.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Cookies
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Keep you logged in securely</li>
          <li>Understand how users interact with ERS</li>
          <li>Improve performance and user experience</li>
          <li>Detect fraud and ensure platform security</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          3. Types of Cookies We Use
        </h2>

        <ul className="space-y-3">
          <li>
            <strong>Essential Cookies:</strong> Required for core functionality
            such as authentication and security.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand usage patterns
            and improve the platform.
          </li>
          <li>
            <strong>Preference Cookies:</strong> Store your settings and preferences.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          4. Managing Cookies
        </h2>
        <p>
          You can control or disable cookies through your browser settings.
          However, disabling cookies may affect the functionality of certain
          parts of the platform.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          5. Updates to This Policy
        </h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will
          be posted on this page with an updated date.
        </p>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          6. Contact
        </h2>
        <p>
          For questions, contact:{" "}
          <a
            href="mailto:support@ers.com"
            className="text-blue-600 underline"
          >
            support@ers.com
          </a>
        </p>
      </section>

    </main>
  );
}