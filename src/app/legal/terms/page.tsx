import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <Header />
      <div className="flex flex-col text-sm gap-4">
        <h1 className="text-lg font-bold">Terms</h1>
        <p>Website Terms of Use</p>
        <p>Last updated: May 15, 2024</p>
        <p>PLEASE READ THIS WEBSITE TERMS OF USE ("Terms of Use") CAREFULLY BEFORE USING THIS WEBSITE.</p>
        <p>1. Agreement<br />
          By using this website (the "Site"), you are agreeing to be bound by the terms and conditions contained in these Terms of Use. If you do not agree with any of these terms, please do not use our Site.</p>
        <p>2. Intellectual Property Rights<br />
          The Site and its original content, features, and functionality are owned by BFF Labs ("Company," "we," "us") and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        <p>The Company does not claim ownership of the research papers or the test results that are made available through the Site. All papers, tests, and their contents are the property of their respective owners. The Site is simply a search engine that provides access to research papers and test results hosted elsewhere, and does not host any content itself.</p>
        <p>3. Disclaimers and Limitations<br />
          We make no representations or warranties about the accuracy, reliability, completeness, or timeliness of any content provided through the Site. Your use of the Site and the content is at your own risk.</p>
        <p>The Site provides information that is made available to you in the form of a searchable database. The Company disclaims all liability for any damages resulting from the use of this information.</p>
        <p>4. User Conduct<br />
          You agree not to use the Site in any manner that could damage, disable, overburden, or impair the Site or interfere with any other party's use and enjoyment of the Site.</p>
        <p>5. Links to Other Websites<br />
          The Site may contain links to third-party websites that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
        <p>6. Changes to These Terms of Use<br />
          We reserve the right, at our sole discretion, to modify or replace these Terms of Use at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        <p>7. Contact Us<br />
          If you have any questions about these Terms of Use, please contact us at team@plasticlist.app.</p>
        <p>This document was last updated on May 15, 2024.</p>
      </div>
      <Footer />
    </main>
  );
}

