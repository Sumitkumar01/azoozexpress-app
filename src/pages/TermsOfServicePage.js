import React from 'react'
import Navbar from '../features/navbar/Navbar'
import Footer from '../features/footer/Footer';

function TermsOfServicePage() {

  const entrytitle ="fs-1 ff-r fw-bold"
  const pageHeader ="py-3 "
  const BlockHeading="fs-3 ff-r bold"
  const wpBlockHeading="fs-4 ff-r bold"
  const pCName="ff-p fs-6"
  return (
    <div>
      <div className='bg-dark'>
        <Navbar />
      </div>

      <div className="container m-t">
        <header className={pageHeader}>
          <h1 className={entrytitle}>Terms of Service</h1>
        </header>
        <div>
          <p className={pCName}>Effective Date: 15.06.2023</p>
          <p className={pCName}>
            Please read these Terms and Conditions (“Terms”) carefully before
            using the Azooz Express website and services. These Terms govern
            your access to and use of our website, as well as any orders or
            transactions you make through our platform. By accessing or using
            our website, you agree to be bound by these Terms. If you do not
            agree to these Terms, please refrain from using our services.
          </p>
          <h2 className={BlockHeading}>Use of Services</h2>
          <h3 className={wpBlockHeading}>1.1 Eligibility</h3>
          <p className={pCName}>
            You must be at least 18 years old to use our services and create an
            account. By using our services, you represent and warrant that you
            have the legal capacity to enter into a binding agreement.
          </p>
          <h3 className={wpBlockHeading}>1.2 Account Creation</h3>
          <p className={pCName}>
            To use certain features of our services, you may be required to
            create an account. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account. You agree to provide accurate and
            complete information when creating an account.
          </p>
          <h3 className={wpBlockHeading}>1.3 Prohibited Activities</h3>
          <p className={pCName}>When using our services, you agree not to:</p>
          <p className={pCName}>
            Violate any applicable laws, regulations, or third-party rights
            <br />
            Use our services for any illegal, unauthorized, or unethical
            purposes
            <br />
            Interfere with the proper functioning of our website or services
            <br />
            Engage in fraudulent activities or misrepresent yourself or your
            intentions
            <br />
            Collect or store personal information of other users without their
            consent
            <br />
            Use automated scripts or bots to access or use our services
          </p>
          <h2 className={BlockHeading}>Orders &amp; Payments</h2>
          <h3 className={wpBlockHeading}>2.1 Placing Orders</h3>
          <p className={pCName}>
            You may place orders through our website by providing accurate and
            complete information, including delivery address and payment
            details. By placing an order, you represent that you are authorized
            to use the provided payment method.
          </p>
          <h3 className={wpBlockHeading}>
            2.2 Order Confirmation &amp; Acceptance
          </h3>
          <p className={pCName}>
            After placing an order, you will receive an order confirmation
            email. Please note that this email is not a guarantee of acceptance.
            We reserve the right to accept or decline your order at our sole
            discretion.
          </p>
          <h3 className={wpBlockHeading}>2.3 Pricing &amp; Payment</h3>
          <p className={pCName}>
            All prices listed on our website are in the local currency and are
            subject to change without notice. Payments are processed securely
            through our authorized payment providers. By providing your payment
            information, you authorize us to charge the applicable fees for your
            orders.
          </p>
          <h3 className={wpBlockHeading}>2.4 Cancellation &amp; Refunds</h3>
          <p className={pCName}>
            Cancellation and refund policies may vary depending on the type of
            order and applicable laws. Please refer to our cancellation and
            refund policy or contact our customer support for more information.
          </p>
          <h2 className={BlockHeading}>Intellectual Property</h2>
          <p className={pCName}>
            All intellectual property rights in our website and services,
            including but not limited to trademarks, logos, text, graphics, and
            software, are owned by or licensed to Azooz Express. You are granted
            a limited, non-exclusive, and non-transferable license to access and
            use our services for personal, non-commercial purposes. You must not
            reproduce, modify, distribute, or exploit any content from our
            website without our prior written consent.
          </p>
          <h2 className={wpBlockHeading}>Limitation of Liability</h2>
          <p className={pCName}>
            To the fullest extent permitted by applicable law, Azooz Express and
            its affiliates, directors, officers, employees, and agents shall not
            be liable for any direct, indirect, incidental, consequential, or
            punitive damages arising out of or in connection with your use of
            our website or services, including but not limited to loss of
            profits, data, or business opportunities.
          </p>
          <h2 className={BlockHeading}>Indemnification</h2>
          <p className={pCName}>
            You agree to indemnify and hold Azooz Express and its affiliates,
            directors, officers, employees, and agents harmless from any claims,
            demands, losses, liabilities, damages, costs, and expenses
            (including attorneys’ fees) arising out of or in connection with
            your use of our website or services, your violation of these Terms,
            or your violation of any rights of a third party.
          </p>
          <h2 className={BlockHeading}>Governing Law &amp; Jurisdiction</h2>
          <p className={pCName}>
            These Terms shall be governed by and construed in accordance with
            the laws of Oman. Any disputes arising out of or relating to these
            Terms or your use of our services shall be subject to the exclusive
            jurisdiction of the courts of Muscat, Oman.
          </p>
          <h2 className={BlockHeading}>Changes to the Terms</h2>
          <p className={pCName}>
            We reserve the right to modify or update these Terms at any time
            without prior notice. Any changes will be effective immediately upon
            posting on our website. Your continued use of our services after the
            posting of revised Terms constitutes your acceptance of such
            changes.
          </p>
          <h2 className={BlockHeading}>Contact Us</h2>
          <p className={pCName}>
            If you have any questions, concerns, or inquiries regarding these
            Terms or our services, please contact us at:
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
    </div>
  );
}

export default TermsOfServicePage