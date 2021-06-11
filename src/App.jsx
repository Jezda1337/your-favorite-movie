import React, { useState } from "react";
import Header from "components/Header";
import Card from "components/Card";
import Search from "components/Search";
import "styles/components/App.scss";

const App = () => {
  let [isOpen, setOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <header>
        <Header setOpen={setOpen} isOpen={isOpen} />
      </header>
      <main className="main">
        <Search isOpen={isOpen} />

        <Card />
      </main>
    </>
  );
};

export default App;
