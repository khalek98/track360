import React from "react";

import styles from "./terms.module.scss";
import PrimaryLayout from "@/layouts/MainLayout";

const Terms = () => {
  return (
    <PrimaryLayout darkMode>
      <section id="terms" className={styles.Section}>
        <div className="container">
          <div className={styles.SectionWrapper}>
            <h1 className={styles.Title}>Terms and Conditions</h1>
            <p className={styles.Text}>Last updated: [26-June-2023]</p>

            <p className={styles.Text}>
              Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms and
              Conditions&quot;) carefully before using our website and the Proline Technologies Ltd.
              SaaS affiliate management platform (the &quot;Service&quot;) operated by Proline
              Technologies Ltd. (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>

            <h2 className={styles.Subtitle}>1. Acceptance of Terms</h2>

            <p className={styles.Text}>
              By accessing and using our Service, you acknowledge that you have read, understood,
              and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do
              not agree with these terms, you should discontinue use of the Service immediately.
            </p>

            <h2 className={styles.Subtitle}>2. Eligibility</h2>

            <p className={styles.Text}>
              The Service is intended solely for businesses that can form legally binding contracts
              under applicable law. By using the Service, you represent and warrant that you are of
              legal age and meet all of the foregoing eligibility requirements.
            </p>

            <h2 className={styles.Subtitle}>3. Service Provision</h2>

            <p className={styles.Text}>
              We provide an affiliate management platform designed for Forex brands, online casinos,
              and e-commerce businesses. We offer our platform on a Software-as-a-Service (SaaS)
              basis. Services and prices are as specified on our website, and the Service is
              provided on an &apos;as is&apos; basis without warranty of any kind, either express or
              implied.
            </p>

            <h2 className={styles.Subtitle}>4. Intellectual Property</h2>

            <p className={styles.Text}>
              The Service and all materials therein, including, without limitation, software,
              images, text, graphics, illustrations, logos, patents, trademarks, service marks,
              copyrights, photographs, audio, videos, and music (the &quot;Content&quot;), and all
              Intellectual Property Rights related thereto, are the exclusive property of Proline
              Technologies Ltd. and its licensors.
            </p>

            <h2 className={styles.Subtitle}>5. Fees and Payments</h2>

            <p className={styles.Text}>
              You agree to pay all applicable fees related to your use of our Service as described
              on the website at the time of selection. All payments are non-refundable and
              non-transferable except as expressly provided in these Terms.
            </p>

            <h2 className={styles.Subtitle}>6. Data Protection</h2>

            <p className={styles.Text}>
              We are committed to protecting your personal data and information according to
              applicable laws and our Privacy Policy, which is incorporated into these Terms.
            </p>

            <h2 className={styles.Subtitle}>7. Termination</h2>

            <p className={styles.Text}>
              We may terminate or suspend access to our Service immediately, without prior notice or
              liability, for any reason whatsoever, including, without limitation, if you breach the
              Terms.
            </p>

            <h2 className={styles.Subtitle}>8. Limitation of Liability</h2>

            <p className={styles.Text}>
              To the maximum extent permitted by law, Proline Technologies Ltd. shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages, or any loss
              of profits or revenues.
            </p>

            <h2 className={styles.Subtitle}>9. Governing Law</h2>

            <p className={styles.Text}>
              These Terms shall be governed by and interpreted in accordance with the laws of
              Israel.
            </p>

            <h2 className={styles.Subtitle}>10. Changes to Terms</h2>

            <p className={styles.Text}>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any
              time.
            </p>

            <p className={styles.Text}>
              By continuing to access or use our Service after those revisions become effective, you
              agree to be bound by the revised terms. If you do not agree to the new terms, please
              stop using the Service.
            </p>

            <h2 className={styles.Subtitle}>11. Contact Us</h2>

            <p className={styles.Text}>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:sales@proline.ltd">sales@proline.ltd</a>.
            </p>
          </div>
        </div>
      </section>
    </PrimaryLayout>
  );
};

export default Terms;
