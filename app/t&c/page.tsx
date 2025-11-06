import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: November 6, 2025
          </p>
        </header>

        {/* Content Body - Responsive Text Block */}
        <div className="prose prose-lg max-w-none text-justify space-y-6">
          <p>
            Welcome to Ceylon Adventures. By booking a trip, package, or accommodation service with us, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>

          {/* 1. Booking and Confirmation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Booking and Confirmation</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li>All bookings are subject to availability and acceptance by Ceylon Adventures.</li>
              <li>A booking is considered confirmed only upon receipt of the required deposit or full payment (as specified in the package details) and issuance of a written confirmation email by Ceylon Adventures.</li>
              <li>The client is responsible for ensuring all personal details, passport information, dates, and package selections in the confirmation are accurate.</li>
            </ul>
          </section>

          {/* 2. Payment and Pricing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Payment and Pricing</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li>The price of your tour package includes only those items specified in the itinerary (e.g., accommodation, transportation, specific meals, and activity entrance fees).</li>
              <li>A non-refundable deposit (typically 30% of the total cost) is required at the time of booking.</li>
              <li>The remaining balance is due at least 45 days prior to the travel start date. Failure to pay the balance by the due date may result in cancellation of the booking and forfeiture of the deposit.</li>
              <li>Prices are subject to change without notice due to fluctuations in currency exchange rates, taxes, and supplier costs, although we will honor confirmed prices upon receipt of the final payment.</li>
            </ul>
          </section>

          {/* 3. Cancellation and Refunds by Client */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cancellation and Refunds by Client</h2>
            <p className="mb-3">
              All cancellations must be received in writing (via email). The effective date of cancellation is the date the written notification is received by Ceylon Adventures.
            </p>
            <ul className="list-disc ml-6 space-y-3">
              <li>**45+ Days Before Travel:** Forfeiture of the non-refundable deposit only.</li>
              <li>**30-44 Days Before Travel:** Forfeiture of 50% of the total trip cost.</li>
              <li>**0-29 Days Before Travel:** Forfeiture of 100% of the total trip cost (no refund).</li>
              <li>No refunds will be provided for any unused portions of the tour, including voluntary absence from activities or early departure.</li>
            </ul>
          </section>

          {/* 4. Changes and Amendments */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Changes and Amendments</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li>Any requested changes to a confirmed itinerary are subject to an administrative fee of USD $50 per change, plus any additional costs incurred by our suppliers (hotels, transport, etc.).</li>
              <li>Changes are not guaranteed and are subject to availability.</li>
              <li>If Ceylon Adventures must make a significant change to the booking, we will inform you as soon as possible and offer comparable alternative arrangements or a full refund.</li>
            </ul>
          </section>

          {/* 5. Liability and Responsibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Liability and Responsibility</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li>Ceylon Adventures acts solely as an agent for various third-party suppliers (hotels, transportation, activity providers). We accept no liability for any loss, damage, injury, delay, or irregularity which may occur due to the act or omission of any such third-party provider.</li>
              <li>We recommend and require that all clients purchase comprehensive travel insurance covering cancellation, medical emergencies, and loss of property.</li>
            </ul>
          </section>
          
          {/* 6. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. Any legal action or proceeding related to the services provided shall be brought exclusively in the courts located in Colombo, Sri Lanka.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;