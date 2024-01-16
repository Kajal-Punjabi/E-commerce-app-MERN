import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet"; //for SEO of the app(basically for changing the title names of the app)
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh " }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "ECommerce App - Shop Now",
  description: "MERN stack project",
  keywords: "mern, react, node , mongodb ",
  author: "KajalPunjabi",
};

export default Layout;
