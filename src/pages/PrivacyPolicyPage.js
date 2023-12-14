import React from "react";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/footer/Footer";

function PrivacyPolicyPage() {
  const entrytitle = "fs-1 ff-r fw-bold";
  const pageHeader = "p-3";
  const BlockHeading = "fs-2 ff-r bold";
  const wpBlockHeading = "fs-3 ff-r bold";
  const pCName = "ff-p fs-6";
  return (
    <>
      <div className="container mt-3">
        <header className={pageHeader}>
          <h1 className={entrytitle}>Privacy Policy</h1>
        </header>
        <div>
          <p className={pCName}>
            <strong>Effective Date:</strong> 15.06.2023
          </p>
          <p className={pCName}>
            At Azooz Express, we value the privacy and security of our users.
            This Privacy Policy outlines how we collect, use, store, and protect
            your personal information when you use our website or services.
            Please read this policy carefully to understand our practices
            regarding your personal data.
          </p>
          <h2 className={BlockHeading}>Information We Collect</h2>
          <h3 className={wpBlockHeading}>1.1 Personal Information</h3>
          <p className={pCName}>
            We may collect personal information from you when you visit our
            website, create an account, place an order, or communicate with our
            customer support. The types of personal information we may collect
            include:
          </p>
          <h3 className={wpBlockHeading}>1.1 Personal Information</h3>
          <p className={pCName}>
            <strong>Full Name</strong>
            <br />
            Contact information (phone number, email address, delivery address)
            <br />
            Payment details (credit card information, billing address)
            <br />
            Account credentials (username, password)
            <br />
            1.2 Automatically Collected Information
            <br />
            When you interact with our website, we may automatically collect
            certain information about your device and usage. This may include:
          </p>
          <h2 className={BlockHeading}>IP Address</h2>
          <p className={pCName}>
            Browser type and version
            <br />
            Operating system
            <br />
            Pages visited and actions taken
            <br />
            Date and time of visits
            <br />
            Referring website addresses
          </p>
          <h2 className={BlockHeading}>Use of Information</h2>
          <h3 className={wpBlockHeading}>2.1 Personal Information</h3>
          <p className={pCName}>
            We use the personal information we collect for the following
            purposes:
          </p>
          <p className={pCName}>
            <strong>Processing and delivering your orders</strong>
            <br />
            Communicating with you regarding your orders or inquiries
            <br />
            Providing customer support
            <br />
            Sending you updates, promotions, and newsletters (with your consent)
            <br />
            Improving our website, services, and overall customer experience
            <br />
            Complying with legal obligations
            <br />
          </p>
          <h3 className={wpBlockHeading}>
            2.2 Automatically Collected Information
          </h3>
          <p className={pCName}>
            We use automatically-collected information to analyze website usage,
            improve our services, and enhance the security and functionality of
            our website. This information is generally aggregated and does not
            personally identify you.
          </p>
          <h2 className={BlockHeading}>Data Sharing &amp; Disclosure</h2>
          <h3 className={wpBlockHeading}>3.1 Third-Party Service Providers</h3>
          <p className={pCName}>
            We may engage trusted third-party service providers to perform
            certain functions on our behalf, such as payment processing,
            delivery services, or analytics. These service providers will have
            access to your personal information only to the extent necessary to
            perform their functions and are contractually obligated to maintain
            its confidentiality.
          </p>
          <h3 className={wpBlockHeading}>3.2 Legal Requirements</h3>
          <p className={pCName}>
            We may disclose your personal information if required to do so by
            law or in response to a valid legal request, such as a court order,
            government inquiry, or to protect our rights, property, or safety.
          </p>
          <h2 className={BlockHeading}>Data Security</h2>
          <p className={pCName}>
            We take appropriate technical and organizational measures to
            safeguard your personal information and protect it against
            unauthorized access, alteration, disclosure, or destruction.
            However, please note that no data transmission over the internet or
            storage method is 100% secure. While we strive to use commercially
            acceptable means to protect your personal information, we cannot
            guarantee its absolute security.
          </p>
          <h2 className={BlockHeading}>Your Rights</h2>
          <p className={pCName}>
            You have certain rights regarding your personal information,
            including the right to:
          </p>
          <p className={pCName}>
            Access and obtain a copy of your personal information
            <br />
            Correct or update your personal information
            <br />
            Request deletion of your personal information
            <br />
            Object to the processing of your personal information
            <br />
            Withdraw your consent (where applicable)
            <br />
            To exercise any of these rights, please contact us using the contact
            information provided below.
          </p>
          <h2 className={BlockHeading}>Third-Party Links</h2>
          <p className={pCName}>
            Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            third-party sites. We encourage you to read the privacy policies of
            any third-party sites you visit.
          </p>
          <h2 className={BlockHeading}>Changes to the Privacy Policy</h2>
          <p className={pCName}>
            We may update this Privacy Policy from time to time. Any changes we
            make will be posted on this page, and the effective date will be
            revised accordingly. We encourage you to review this policy
            periodically for any updates.
          </p>
          <h2 className={BlockHeading}>Contact Us</h2>
          <p className={pCName}>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at:
          </p>
          <h2 className={BlockHeading}>Azooz Express</h2>
          <p className={pCName}>
            PO BOX 84, Postal code 101, Sultanate of Oman.
            <br />
            Muscat, Oman
            <br />
            Email: info@azoozexpress.com
          </p>
          <div className="post-tags" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
