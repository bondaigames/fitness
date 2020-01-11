import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const Layout = props => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">{props.children}</div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;
