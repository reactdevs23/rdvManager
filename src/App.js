import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fomo from "./components/Fomo/Fomo";

import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import AddData from "./components/Modal/AddData/AddData";

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <Header setSidebar={setSidebar} />
        <div className={styles.rightContainer}>
          {" "}
          <Routes>
            <Route path="/" element={<Fomo />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
