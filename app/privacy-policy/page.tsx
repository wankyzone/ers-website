export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500">
          Last updated: 5 June 2026
        </p>
      </div>

      {/* Intro */}
      <p className="mb-6 leading-relaxed">
        Welcome to ERS (Errand Runners System). Your privacy is critical to us.
        This Privacy Policy explains how we collect, use, and protect your
        information when you use our platform.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>

        <h3 className="font-semibold mt-4 mb-2">a. Personal Information</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Profile details</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">b. Location Data</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Real-time GPS location</li>
          <li>Delivery route tracking</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">c. Transaction Data</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Errand details</li>
          <li>Payment records</li>
          <li>Wallet and payout information</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">d. Device & Usage Data</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>IP address</li>
          <li>Device type</li>
          <li>App interactions and logs</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Match clients with runners</li>
          <li>Facilitate errands and deliveries</li>
          <li>Process payments and payouts</li>
          <li>Improve platform performance</li>
          <li>Detect fraud and abuse</li>
          <li>Send notifications and updates</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          3. Data Sharing
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Payment processors (e.g., Paystack)</li>
          <li>Service providers (hosting, analytics)</li>
          <li>Law enforcement when required by law</li>
        </ul>
        <p className="mt-3 font-medium">
          We do not sell your personal data.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          4. Data Security
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Encrypted connections (HTTPS)</li>
          <li>Secure authentication (JWT)</li>
          <li>Role-based access controls</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          5. Your Rights
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Access your data</li>
          <li>Request deletion</li>
          <li>Update your information</li>
          <li>Opt out of marketing communications</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          6. Data Retention
        </h2>
        <p>
          We retain data only as long as necessary for service delivery,
          legal compliance, and fraud prevention.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          7. Updates to This Policy
        </h2>
        <p>
          We may update this policy periodically. Changes will be communicated
          via the app or email.
        </p>
      </section>

      {/* Section 8 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          8. Contact
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