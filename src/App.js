import { Fragment } from "react";

import Header from "./components/Layout/Header";
import SectionApis from "./components/Layout/SectionApis";
import SectionContacts from "./components/Layout/SectionContacts";

function App() {
  return (
    <Fragment>
      <Header />
      <SectionApis />
      <SectionContacts />
    </Fragment>
  );
}

export default App;
