import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LoadingAnimation from "@components/LoadingAnimation";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<LoadingAnimation/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
