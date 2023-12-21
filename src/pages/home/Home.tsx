import React, { type ReactElement } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Counter from "../../components/Counter/Counter";

const Home = (): ReactElement => {
  return (
    <div>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
};

export default Home;
