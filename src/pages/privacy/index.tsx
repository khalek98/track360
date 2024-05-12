import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";

import styles from "../terms/terms.module.scss";

import PrimaryLayout from "@/layouts/MainLayout";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["home", "buttons", "footer", "forms"])),
    },
  };
};

const Privacy = () => {
  return (
    <PrimaryLayout darkMode>
      <section id="privacy" className={styles.Section}>
        <div className="container">
          <div className={styles.SectionWrapper}>
            <h1 className={styles.Title}>Privacy Policy</h1>

            <p className={styles.Text}>Last updated: [26-June-2026]</p>

            <h2 className={styles.Subtitle}>1. Introduction</h2>

            <p className={styles.Text}>
              Proline Technologies Ltd (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects
              your privacy and is committed to protecting it through this Privacy Policy. This
              Privacy Policy explains our practices regarding the collection, use, and disclosure of
              information that we receive when you use our SaaS affiliate management platform (the
              &quot;Service&quot;).
            </p>

            <p className={styles.Text}>
              By accessing or using the Service, you agree to this Privacy Policy.
            </p>

            <h2 className={styles.Subtitle}>2. Information Collection</h2>

            <p className={styles.Text}>
              While using our Service, we may ask you to provide us with certain personally
              identifiable information that can be used to contact or identify you. Personally
              identifiable information may include, but is not limited to, your email address, name,
              phone number, postal address, and other information (&quot;Personal
              Information&quot;).
            </p>

            <h2 className={styles.Subtitle}>3. Log Data</h2>

            <p className={styles.Text}>
              We collect information that your browser sends whenever you visit our Service
              (&quot;Log Data&quot;). This Log Data may include information such as your
              computer&apos;s Internet Protocol (&quot;IP&quot;) address, browser type, browser
              version, the pages of our Service that you visit, the time and date of your visit, the
              time spent on those pages, and other statistics.
            </p>

            <h2 className={styles.Subtitle}>4. Cookies</h2>

            <p className={styles.Text}>
              We use cookies to collect information. You can instruct your browser to refuse all
              cookies or to indicate when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>

            <h2 className={styles.Subtitle}>5. Use of Information</h2>

            <p className={styles.Text}>
              We use the collected data for various purposes: to provide and maintain our Service,
              to notify you about changes to our Service, to allow you to participate in interactive
              features of our Service when you choose to do so, to provide customer support, to
              gather analysis or valuable information so that we can improve our Service, to monitor
              the usage of our Service, and to detect, prevent, and address technical issues.
            </p>

            <h2 className={styles.Subtitle}>6. Security</h2>

            <p className={styles.Text}>
              The security of your Personal Information is important to us, but remember that no
              method of transmission over the Internet, or method of electronic storage is 100%
              secure. While we strive to use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>

            <h2 className={styles.Subtitle}>7. Changes to This Privacy Policy</h2>

            <p className={styles.Text}>
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>

            <h2 className={styles.Subtitle}>8. Contact Us</h2>

            <p className={styles.Text}>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:sales@proline.ltd">sales@proline.ltd</a>.
            </p>
          </div>
        </div>
      </section>
    </PrimaryLayout>
  );
};

export default Privacy;
