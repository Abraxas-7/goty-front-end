import { Outlet } from "react-router-dom";

import Loader from "../components/ui/Loader";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

export default function DefaultLayout() {
  return (
    <div className="min-vh-100 d-flex flex-column position-relative">
      <Loader />

      <Header />

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
