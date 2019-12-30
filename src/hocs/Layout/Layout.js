import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const layout = props => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">{props.children}</div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default layout;
