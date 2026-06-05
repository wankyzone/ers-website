export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500">
          Last updated: 5 June 2026
        </p>
      </div>

      {/* Intro */}
      <p className="mb-6 leading-relaxed">
        By accessing or using ERS (Errand Runners System), you agree to be bound
        by these Terms of Service. If you do not agree, you may not use the platform.
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          1. Platform Overview
        </h2>
        <p>
          ERS connects clients with independent runners to complete errands.
          ERS acts solely as a technology platform facilitating interactions
          and is not a direct provider of delivery or errand services.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          2. User Responsibilities
        </h2>

        <h3 className="font-semibold mt-4 mb-2">Clients</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Provide accurate and complete errand details</li>
          <li>Ensure timely payment for completed services</li>
          <li>Treat runners with respect and professionalism</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Runners</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Complete errands as agreed</li>
          <li>Maintain professionalism at all times</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          3. Payments
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Payments may be processed via escrow or postpaid systems</li>
          <li>ERS may charge service and platform fees</li>
          <li>Late payments may result in penalties or account restrictions</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          4. Cancellations & Disputes
        </h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Orders may be cancelled under defined conditions</li>
          <li>Disputes are handled through the ERS admin system</li>
          <li>ERS reserves the right to make final dispute decisions</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          5. Account Suspension
        </h2>
        <p className="mb-3">
          ERS reserves the right to suspend or terminate accounts for:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Fraudulent or illegal activity</li>
          <li>Abuse, harassment, or misconduct</li>
          <li>Violation of these Terms</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          6. Liability Limitation
        </h2>
        <p className="mb-3">
          ERS operates as an intermediary platform and is not liable for:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Loss, damage, or theft of items</li>
          <li>Actions or misconduct of users</li>
          <li>Delays caused by external factors</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          7. Modifications to Terms
        </h2>
        <p>
          ERS may update these Terms at any time. Continued use of the platform
          constitutes acceptance of the updated Terms.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          8. Governing Law
        </h2>
        <p>
          These Terms are governed by and interpreted in accordance with the
          laws of the Federal Republic of Nigeria.
        </p>
      </section>

      {/* Section 9 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          9. Contact
        </h2>
        <p>
          For questions or concerns, contact:{" "}
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