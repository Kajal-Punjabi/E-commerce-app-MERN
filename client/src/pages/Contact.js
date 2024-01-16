import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Got questions, feedback, or just want to say hello? Our friendly
            team is here to assist you. Feel free to contact us anytime
            regarding any query or info about our products, services or any
            other stuff. <br />
            We are 24x7 available!
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@chicstore.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (Toll Free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;