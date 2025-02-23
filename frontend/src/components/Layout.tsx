import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

let vh = 0;

function Layout() {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  return (
    <main className="min-h-[calc(var(--vh,1vh)*100)] max-w-[480px] w-full mx-auto h-screen bg-white">
      <Outlet />
    </main>
  );
}

export default Layout;
