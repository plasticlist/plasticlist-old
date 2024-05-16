import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen max-w-4xl flex flex-col mx-auto p-8 justify-between gap-8">
      <Header />
      <div className="flex flex-col text-sm gap-4">
        <h1 className="text-lg font-bold">Privacy</h1>
        <p>Website Privacy Policy</p>
        <p>Last updated: May 15, 2024</p>
        <p>PLEASE READ THIS WEBSITE'S PRIVACY POLICY ("PRIVACY POLICY") CAREFULLY BEFORE USING THIS WEBSITE.</p>
        <p>
          1. Information We Collect<br />
          Personal Data<br />
          We collect the following personal information when you interact with our Site:
        </p>
        <p>Email Address: We collect your email address when you provide it to us, such as when you subscribe to our newsletter or contact us.</p>
        <p>
          2. Use of Your Information<br />
          We may use the information we collect about you in the following ways:
        </p>
        <p>To provide and manage the Site.</p>
        <p>To communicate with you, including responding to your inquiries and sending newsletters.</p>
        <p>To improve our Site and services.</p>
        <p>To comply with legal obligations.</p>
        <p>
          3. Disclosure of Your Information<br />
          We do not sell, trade, or otherwise transfer to outside parties your personal information. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it’s appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety.
        </p>
        <p>
          4. Your Rights Under CCPA and CalOPPA<br />
          California Consumer Privacy Act (CCPA)<br />
          Under the CCPA, California residents have the right to:
        </p>
        <p>Know what personal data is being collected about them.</p>
        <p>Request access to their personal data.</p>
        <p>Request deletion of their personal data.</p>
        <p>Opt-out of the sale of their personal data (although we do not sell personal data).</p>
        <p>
          California Online Privacy Protection Act (CalOPPA)<br />
          Under CalOPPA, California residents have the right to:
        </p>
        <p>Visit our site anonymously.</p>
        <p>See the privacy policy link on our home page or as a minimum, on the first significant page after entering our website.</p>
        <p>Be notified of any privacy policy changes on our Privacy Policy page.</p>
        <p>Know how we handle Do Not Track signals.</p>
        <p>
          5. Do Not Track Signals<br />
          We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
        </p>
        <p>
          6. Security of Your Information<br />
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
        <p>
          7. Changes to This Privacy Policy<br />
          We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on our Site. You are advised to review this Privacy Policy periodically for any changes.
        </p>
        <p>
          8. Contact Us<br />
          If you have any questions about this Privacy Policy, please contact us at team@plasticlist.app</p>
        <p>By using our Site, you consent to our Privacy Policy.</p>
      </div>
      <Footer />
    </main>
  );
}