import React from "react";
import Layout from "../components/Layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="\images\privacypolicy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify">
            This Privacy Policy document contains types of information that is
            collected and recorded by us and how we use it. If you have
            additional questions or require more information about our Privacy
            Policy, do not hesitate to Contact through email at
            <b> www.help@chicstore.com</b>
          </p>
          <ul>
            <li>
              We prioritize safeguarding your personal information and ensure
              strict confidentiality in all transactions.
            </li>{" "}
            <br />
            <li>
              Your data is collected solely for improving your shopping
              experience and will never be shared without your consent.
            </li>{" "}
            <br />
            <li>
              We use industry-standard security measures to protect your
              information from unauthorized access or misuse.
            </li>{" "}
            <br />
            <li>
              You have the right to access, modify, or delete your data, and we
              provide easy avenues for you to exercise these rights.
            </li>{" "}
            {/* <br />
            <li>
              By using our platform, you agree to our privacy policy, which may
              be updated periodically to reflect any changes in our practices.
            </li> */}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
