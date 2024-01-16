import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - ECommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <p class="fs-1 fw-bold"> Who Are We? </p>
            We're a team of passionate individuals dedicated to bringing you a
            hassle-free shopping experience. Our journey began with a simple
            idea: to make finding and buying the things you need easier than
            ever. Whether it's the latest tech gadgets, trendy fashion pieces,
            everyday essentials, or unique gifts, we've curated a diverse
            collection just for you. At Chic Store, we value quality and strive
            to collaborate with trusted sellers, ensuring each product meets our
            standards. Your satisfaction is our priority, so we've streamlined
            the process, from browsing to checkout, making it simple, secure,
            and efficient. We're not just a marketplace; we're your go-to
            destination for convenience and reliability. Thank you for choosing
            us to be a part of your shopping journey!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
