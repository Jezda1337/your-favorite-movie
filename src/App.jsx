import React, { useState } from "react";
import Header from "components/Header";
import Card from "components/Card";
import Search from "components/Search";
import "styles/components/App.scss";

const App = () => {
  let [isOpen, setOpen] = useState(false);
  console.log(isOpen);

<<<<<<< HEAD
  return (
    <>
      <header>
        <Header setOpen={setOpen} isOpen={isOpen} />
      </header>
      <main className="main">
        <Search isOpen={isOpen} />

        <Card />
      </main>
=======
            {/* <Card/> */}
        </main>
>>>>>>> c26524ce69f72bccbf68a653d780fb0aa2edbd16
    </>
  );
};

export default App;
