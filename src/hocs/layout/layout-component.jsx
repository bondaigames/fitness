import React from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const Layout = props => {
  return (
    <React.Fragment>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Layout;
