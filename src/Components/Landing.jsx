import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cards } from "./Cards";
import { AccountSummery } from "./AccountSummery";
import { Loans } from "./Loans";
import { Home } from "./Home";
import { Nav } from "./Nav";


export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/cards" element={<Cards />} />
          <Route path="/accountSummery" element={<AccountSummery />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
