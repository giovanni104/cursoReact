import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="hero" element={<HeroPage />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
    </>
  );
};